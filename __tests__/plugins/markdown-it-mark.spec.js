import render from '#/render';

describe('markdown-it-mark tests', () => {
  let source, result;

  it('should be able to support <mark> tags', async () => {
    source = '==marked==';
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('</mark>');
  });
});
