module.exports = {
  name: 'support',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/support',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
