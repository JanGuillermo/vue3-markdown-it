import render from '#/render';

describe('markdown-it-ins tests', () => {
  let source, result;

  it('should be able to support <insert> tags', async () => {
    source = '++inserted++';
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('</ins>');
  });
});
