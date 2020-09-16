import render from '#/render';

describe('markdown-it-footnote tests', () => {
  let source, result;

  it('should be able to support footnotes', async () => {
    source = `
Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.
    `;
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('footnote-ref');
    expect(global.wrapper.html()).toContain('footnote-backref');
  });
});
