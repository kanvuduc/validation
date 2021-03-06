'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Utilities = require('../validation/utilities');

var data = {
  settings: {
    numericRegex: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/
  },
  messages: {
    isRequired: 'gereklidir',
    AlphaNumericOrWhitespaceValidationRule: function AlphaNumericOrWhitespaceValidationRule(newValue, threshold) {
      return 'sadece alfanumerik karakterler veya boşluk girebilirsiniz';
    },
    AlphaNumericValidationRule: function AlphaNumericValidationRule(newValue, threshold) {
      return 'sadece alfanumerik karakterleri girebilirsiniz';
    },
    AlphaValidationRule: function AlphaValidationRule(newValue, threshold) {
      return 'sadece harf veya boşluk girebilirsiniz';
    },
    AlphaOrWhitespaceValidationRule: function AlphaOrWhitespaceValidationRule(newValue, threshold) {
      return 'sadece harf veya boşluk girebilirsiniz';
    },
    BetweenLengthValidationRule: function BetweenLengthValidationRule(newValue, threshold) {
      return 'uzunluğu ' + _Utilities.Utilities.getValue(threshold.minimumLength) + ' ile ' + _Utilities.Utilities.getValue(threshold.maximumLength) + ' arasında olmalıdır';
    },
    BetweenValueValidationRule: function BetweenValueValidationRule(newValue, threshold) {
      return '' + _Utilities.Utilities.getValue(threshold.minimumValue) + ' ile ' + _Utilities.Utilities.getValue(threshold.maximumValue) + ' arasında bir değer giriniz';
    },
    CustomFunctionValidationRule: function CustomFunctionValidationRule(newValue, threshold) {
      return 'geçerli bir değer giriniz';
    },
    DigitValidationRule: function DigitValidationRule(newValue, threshold) {
      return 'sadece rakam girebilirsiniz';
    },
    EmailValidationRule: function EmailValidationRule(newValue, threshold) {
      return 'geçerli bir e-posta giriniz';
    },
    EqualityValidationRule: function EqualityValidationRule(newValue, threshold) {
      return 'değer ' + _Utilities.Utilities.getValue(threshold.otherValue) + '\'\'e eşit olmalıdır';
    },
    InEqualityValidationRule: function InEqualityValidationRule(newValue, threshold) {
      return 'değer ' + _Utilities.Utilities.getValue(threshold.otherValue) + '\'\'den farklı olmalıdır';
    },
    EqualityWithOtherLabelValidationRule: function EqualityWithOtherLabelValidationRule(newValue, threshold) {
      return 'değer ' + _Utilities.Utilities.getValue(threshold.otherValueLabel) + '\'\'e eşit olmalıdır';
    },
    InEqualityWithOtherLabelValidationRule: function InEqualityWithOtherLabelValidationRule(newValue, threshold) {
      return 'değer ' + _Utilities.Utilities.getValue(threshold.otherValueLabel) + '\'\'den farklı olmalıdır';
    },
    InCollectionValidationRule: function InCollectionValidationRule(newValue, threshold) {
      return 'geçersiz değer';
    },
    MinimumInclusiveValueValidationRule: function MinimumInclusiveValueValidationRule(newValue, threshold) {
      return 'değer ' + _Utilities.Utilities.getValue(threshold) + ' veya daha fazla olmalıdır';
    },
    MinimumLengthValidationRule: function MinimumLengthValidationRule(newValue, threshold) {
      return 'değer en az ' + _Utilities.Utilities.getValue(threshold) + ' karakter uzunluğunda olmalıdır';
    },
    MinimumValueValidationRule: function MinimumValueValidationRule(newValue, threshold) {
      return 'daha fazla olmalıdır ' + _Utilities.Utilities.getValue(threshold);
    },
    MaximumInclusiveValueValidationRule: function MaximumInclusiveValueValidationRule(newValue, threshold) {
      return 'değer ' + _Utilities.Utilities.getValue(threshold) + '\'\'dan az olmalı';
    },
    MaximumLengthValidationRule: function MaximumLengthValidationRule(newValue, threshold) {
      return 'değer ' + _Utilities.Utilities.getValue(threshold) + ' karakterden uzun olmamalıdır';
    },
    MaximumValueValidationRule: function MaximumValueValidationRule(newValue, threshold) {
      return 'değer ' + _Utilities.Utilities.getValue(threshold) + '\'\'dan az olmalı';
    },
    NumericValidationRule: function NumericValidationRule(newValue, threshold) {
      return 'sadece sayı girebilirsiniz';
    },
    RegexValidationRule: function RegexValidationRule(newValue, threshold) {
      return 'geçerli bir değer giriniz';
    },
    ContainsOnlyValidationRule: function ContainsOnlyValidationRule(newValue, threshold) {
      return 'geçerli bir değer giriniz';
    },
    StrongPasswordValidationRule: function StrongPasswordValidationRule(newValue, threshold) {
      return 'küçük harfler, büyük harfler, sayılar ve işaretlerin birleşimi olmalıdır';
    },
    MediumPasswordValidationRule: function MediumPasswordValidationRule(newValue, threshold) {
      return 'küçük harfler, büyük harfler, sayılar veya işaretlerden en az ' + _Utilities.Utilities.getValue(threshold) + ' değişik tip olmalı';
    }
  }
};
exports.data = data;