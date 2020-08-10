module.exports = {
  name: 'sales',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sales',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
