import MarkdownItStrikethroughAlt from 'markdown-it-strikethrough-alt';
import render from '#/render';

describe('markdown-it tests', () => {
  let source, result;

  it('should initialize properly', async () => {
    expect(global.wrapper.text()).toEqual('');
  });

  it('should update with "<h2>Hello World!</h2>"', async () => {
    source = '## Hello World!';
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
  });

  it('should be able to support external plugins', async () => {
    source = '--Strikeout--';
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).not.toContain('</s>');

    const plugins = [
      {
        plugin: MarkdownItStrikethroughAlt
      }
    ];
    await global.wrapper.setProps({ source, plugins });
    expect(global.wrapper.html()).toContain('</s>');
  });
});
