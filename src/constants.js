// @ts-check

/** @deprecated Use `Event.onSubmit` */
export const PAYMENT_SUBMIT_EVENT = 'didSubmitCallback';

/** @deprecated Use `Event.onAdditionalDetails` */
export const PAYMENT_PROVIDE_DETAILS_EVENT = 'didProvideCallback';

/** @deprecated Use `Event.onComplete` */
export const PAYMENT_COMPLETED_EVENT = 'didCompleteCallback';

/** @deprecated Use `Event.onError` */
export const PAYMENT_FAILED_EVENT = 'didFailCallback';

/** @deprecated Use `ErrorCode.Canceled` */
export const ERROR_CODE_CANCELED = 'canceledByShopper';

/** @deprecated Use `ErrorCode.NotSupported` */
export const ERROR_CODE_NOT_SUPPORTED = 'notSupported';

/** @deprecated Use `ErrorCode.NoClientKey` */
export const ERROR_CODE_NO_CLIENT_KEY = 'noClientKey';

/** @deprecated Use `ErrorCode.NoPayment` */
export const ERROR_CODE_NO_PAYMENT = 'noPayment';

/** @deprecated Use `ErrorCode.InvalidPaymentMethods` */
export const ERROR_CODE_INVALID_PAYMENT_METHODS = 'invalidPaymentMethods';

/** @deprecated Use `ErrorCode.InvalidAction` */
export const ERROR_CODE_INVALID_ACTION = 'invalidAction';

/** @deprecated Use `ErrorCode.NoPaymentMethod` */
export const ERROR_CODE_NO_PAYMENT_METHOD = 'noPaymentMethod';

export const UNKNOWN_PAYMENT_METHOD_ERROR =
  'Unknown payment method or native module. \n\n' +
  'Make sure your paymentMethods response contains: ';

export const LINKING_ERROR =
  `The package '@adyen/react-native' doesn't seem to be linked. Make sure: \n\n` +
  // @ts-ignore
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export const MISSING_CONTEXT_ERROR =
  'useAdyenCheckout must be used within a AdyenCheckout';

/**
 * Collection of events that components can trigger.
 * @typedef {Object} Event
 * @property {string} onSubmit Event handler, called when the shopper selects the Pay button and payment details are valid.
 * @property {string} onAdditionalDetails Event handler, called when a payment method requires more details, for example for native 3D Secure 2, or native QR code payment methods.
 * @property {string} onComplete Event handler, called when a shopper finishes the flow (Voucher payments only).
 * @property {string} onError Event handler, called when payment about to be terminate.
 */

/**  @type {Event} */
export const Event = Object.freeze({
  onSubmit: 'didSubmitCallback',
  onAdditionalDetails: 'didProvideCallback',
  onComplete: 'didCompleteCallback',
  onError: 'didFailCallback',
});

/**
 * Collection of errors components can throw.
 * @typedef {Object} ErrorCode
 * @property {string} Canceled Payment was canceled by shopper.
 * @property {string} NotSupported Payment method not supported on current platform..
 * @property {string} NoClientKey Missing or invalid clientKey in configuration.
 * @property {string} NoPayment Missing or invalid amount or country code in configuration.
 * @property {string} InvalidPaymentMethods Can not parse paymentMethods or the list is empty.
 * @property {string} InvalidAction Can not parse action.
 * @property {string} NoPaymentMethod Can not find selected payment method type in provided list.
 */

/** @type {ErrorCode} */
export const ErrorCode = Object.freeze({
  Canceled: 'canceledByShopper',
  NotSupported: 'notSupported',
  NoClientKey: 'noClientKey',
  NoPayment: 'noPayment',
  InvalidPaymentMethods: 'invalidPaymentMethods',
  InvalidAction: 'invalidAction',
  NoPaymentMethod: 'noPaymentMethod',
});

/**
 * Collection of available environments.
 * @typedef {Object} Environment
 * @property {string} Test
 * @property {string} Europe
 * @property {string} US
 * @property {string} Australia
 * @property {string} AsiaPacificSouthEast
 * @property {string} India
 */

/** @type {Environment} */
export const Environment = Object.freeze({
  Test: 'test',
  Europe: 'live-eu',
  US: 'live-us',
  Australia: 'live-au',
  AsiaPacificSouthEast: 'live-apse',
  India: 'live-in',
});

/**
 * Collection of available result codes that represent payments current state, as well as any actions you should take.
 * @typedef {Object} ResultCode
 * @property {string} AuthenticationFinished The payment has been successfully authenticated with 3D Secure.
 * @property {string} AuthenticationNotRequired The transaction does not require 3D Secure authentication, for example, the issuing bank does not require authentication or the transaction is out of scope.
 * @property {string} Authorised The payment was successfully authorised.
 * @property {string} Cancelled The payment was cancelled (by either the shopper or your own system) before processing was completed.
 * @property {string} ChallengeShopper The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.
 * @property {string} Error There was an error when the payment was being processed. You'll receive a refusalReason in the same response, indicating the cause of the error.
 * @property {string} IdentifyShopper The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.
 * @property {string} Pending It's not possible to obtain the final status of the payment at this time. This is common for payments with an asynchronous flow, such as Boleto or iDEAL.
 * @property {string} PresentToShopper Present the voucher or the QR code to the shopper.
 * @property {string} Received This is part of the standard payment flow for methods such as SEPA Direct Debit, where it can take some time before the final status of the payment is known.
 * @property {string} RedirectShopper The shopper needs to be redirected to an external web page or app to complete the payment.
 * @property {string} Refused The payment was refused. You'll receive a `refusalReason` in the same response that indicates why it was refused.
 */

/** @type {ResultCode} */
export const ResultCode = Object.freeze({
  AuthenticationFinished: 'AuthenticationFinished',
  AuthenticationNotRequired: 'AuthenticationNotRequired',
  Authorised: 'Authorised',
  Cancelled: 'Cancelled',
  ChallengeShopper: 'ChallengeShopper',
  Error: 'Error',
  IdentifyShopper: 'IdentifyShopper',
  Pending: 'Pending',
  PresentToShopper: 'PresentToShopper',
  Received: 'Received',
  RedirectShopper: 'RedirectShopper',
  Refused: 'Refused',
});
