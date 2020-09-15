import render from '#/render';

describe('markdown-it-deflist tests', () => {
  let source, result;

  it('should be able to support definition lists', async () => {
    source = `
      First Term
      : This is the definition of the first term.
      
      Second Term
      : This is one definition of the second term.
      : This is another definition of the second term.
    `;
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('</dl>');
    expect(global.wrapper.html()).toContain('</dt>');
    expect(global.wrapper.html()).toContain('</dd>');
  });
});
