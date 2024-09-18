from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
from typing import List, Dict, Set

origins = ["*"]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: List[Dict]  # List of nodes
    edges: List[Dict]  # List of edges
@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    
    # Create adjacency list to check for DAG
    adj_list = {node['id']: [] for node in pipeline.nodes}
    for edge in pipeline.edges:
        adj_list[edge['source']].append(edge['target'])

    # Helper function to check if a graph is a DAG
    def is_dag(adj_list: Dict[str, List[str]]) -> bool:
        visited = set()
        rec_stack = set()

        def dfs(node):
            if node in rec_stack:
                return False  # Found a cycle
            if node in visited:
                return True

            visited.add(node)
            rec_stack.add(node)

            for neighbor in adj_list[node]:
                if not dfs(neighbor):
                    return False

            rec_stack.remove(node)
            return True

        for node in adj_list:
            if node not in visited:
                if not dfs(node):
                    return False
        return True

    is_dag_result = is_dag(adj_list)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag_result}
    # return {'status': 'parsed'}
