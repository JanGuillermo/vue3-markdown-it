import render from '#/render';

describe('markdown-it-sub tests', () => {
  let source, result;

  it('should be able to support subscript', async () => {
    source = 'H~2~0';
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('</sub>');
  });
});
