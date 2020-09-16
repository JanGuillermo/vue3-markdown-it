import render from '#/render';

describe('markdown-it-anchor tests', () => {
  let source, result;

  it('should be able to support anchors', async () => {
    source = `
# First header
Lorem ipsum.
    `;
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('first-header');
  });
});
