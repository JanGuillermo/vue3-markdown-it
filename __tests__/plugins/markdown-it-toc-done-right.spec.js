import render from '#/render';

describe('markdown-it-toc-done-right tests', () => {
  let source, result;

  it('should be able to support table of contents', async () => {
    source = `
      [[toc]]

      # First heading
      Swag

      ## Second heading
      Awesome sauce!
    `;
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('table-of-contents');
  });
});
