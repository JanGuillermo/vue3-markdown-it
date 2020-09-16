import render from '#/render';

describe('markdown-it-sup tests', () => {
  let source, result;

  it('should be able to support superscript', async () => {
    source = '29^th^';
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('</sup>');
  });
});
