import Strategy from 'interfaces/strategy';

const testPattern = /^(?<filePath>.*)_test\.(?<ext>[^\.]+)$/;
const sourcePattern = /^(?<filePath>.*)\.(?<ext>[^\.]+)$/;

const sourceTemplate = '$<filePath>.$<ext>';
const testTemplate = '$<filePath>_test.$<ext>';
export default class SameDirectoryStrategy implements Strategy {
  public static getInstance() {
    return new SameDirectoryStrategy();
  }

  resolve(filePath: string): string {
    if (filePath.match(testPattern)) {
      return filePath.replace(testPattern, sourceTemplate);
    }
    return filePath.replace(sourcePattern, testTemplate);
  }
}
