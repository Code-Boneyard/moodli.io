module.exports = {
  name: 'dev',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dev',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
