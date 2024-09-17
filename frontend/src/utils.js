export const getHelperText = (type) => {
    if (type === 'image') {
        return 'SVG, PNG, JPG or GIF.';
    } else if (type === 'audio') {
        return 'MP3 or WAV.';
    } else if (type === 'video') {
        return 'MP4 or WebM.';
    } else {
        return '';
    }
}