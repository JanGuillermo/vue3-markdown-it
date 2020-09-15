import render from '#/render';

describe('markdown-it-strikethrough-alt tests', () => {
  let source, result;

  it('should be able to support strikethrough', async () => {
    source = '--vue3-markdown-it sucks--';
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('</s>');
  });
});
