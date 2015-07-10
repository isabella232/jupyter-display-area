import RendererBase from './rendererbase.js';

export class TextRenderer extends RendererBase {
    get mimetype() {
        return 'text/plain';
    }

    render(data) {
        var el = document.createElement('div');
        el.textContent = data;
        return el;
    }
}
