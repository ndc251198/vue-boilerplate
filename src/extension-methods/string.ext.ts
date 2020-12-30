
interface StringConstructor {
  /**
   * Hàm format string
   * @param template định dạng template
   * @param args 
   */
  format(template: string, ...args: any[]): string;
}

String.format = function(template, ...args) {
  let result = template;
  for (const k in args) {
    result = result.replace(new RegExp("\\{" + k + "\\}", 'g'), args[k]);
  }
  return result;
}