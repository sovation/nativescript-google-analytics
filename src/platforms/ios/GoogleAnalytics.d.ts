declare class GAI extends NSObject {

    static alloc(): GAI; // inherited from NSObject

    static new(): GAI; // inherited from NSObject

    static sharedInstance(): GAI;

    defaultTracker: GAITracker;

    dispatchInterval: number;

    dryRun: boolean;

    logger: GAILogger;

    optOut: boolean;

    trackUncaughtExceptions: boolean;

    dispatch(): void;

    dispatchWithCompletionHandler(completionHandler: (p1: GAIDispatchResult) => void): void;

    removeTrackerByName(name: string): void;

    trackerWithNameTrackingId(name: string, trackingId: string): GAITracker;

    trackerWithTrackingId(trackingId: string): GAITracker;
}

declare class GAIDictionaryBuilder extends NSObject {

    static alloc(): GAIDictionaryBuilder; // inherited from NSObject

    static createAppView(): GAIDictionaryBuilder;

    static createEventWithCategoryActionLabelValue(category: string, action: string, label: string, value: number): GAIDictionaryBuilder;

    static createExceptionWithDescriptionWithFatal(description: string, fatal: number): GAIDictionaryBuilder;

    static createItemWithTransactionIdNameSkuCategoryPriceQuantityCurrencyCode(transactionId: string, name: string, sku: string, category: string, price: number, quantity: number, currencyCode: string): GAIDictionaryBuilder;

    static createScreenView(): GAIDictionaryBuilder;

    static createSocialWithNetworkActionTarget(network: string, action: string, target: string): GAIDictionaryBuilder;

    static createTimingWithCategoryIntervalNameLabel(category: string, intervalMillis: number, name: string, label: string): GAIDictionaryBuilder;

    static createTransactionWithIdAffiliationRevenueTaxShippingCurrencyCode(transactionId: string, affiliation: string, revenue: number, tax: number, shipping: number, currencyCode: string): GAIDictionaryBuilder;

    static new(): GAIDictionaryBuilder; // inherited from NSObject

    addProduct(product: GAIEcommerceProduct): GAIDictionaryBuilder;

    addProductImpressionImpressionListImpressionSource(product: GAIEcommerceProduct, name: string, source: string): GAIDictionaryBuilder;

    addPromotion(promotion: GAIEcommercePromotion): GAIDictionaryBuilder;

    build(): NSMutableDictionary<any, any>;

    get(paramName: string): string;

    setAll(params: NSDictionary<any, any>): GAIDictionaryBuilder;

    setCampaignParametersFromUrl(urlString: string): GAIDictionaryBuilder;

    setForKey(value: string, key: string): GAIDictionaryBuilder;

    setProductAction(productAction: GAIEcommerceProductAction): GAIDictionaryBuilder;
}

declare const enum GAIDispatchResult {

    kGAIDispatchNoData = 0,

    kGAIDispatchGood = 1,

    kGAIDispatchError = 2
}

declare class GAIEcommerceFields extends NSObject {

    static alloc(): GAIEcommerceFields; // inherited from NSObject

    static impressionListForIndex(index: number): string;

    static new(): GAIEcommerceFields; // inherited from NSObject

    static productFieldForIndexSuffix(index: number, suffix: string): string;

    static productImpressionForListIndexSuffix(list: string, index: number, Suffix: string): string;

    static promotionForIndexSuffix(index: number, suffix: string): string;
}

declare class GAIEcommerceProduct extends NSObject {

    static alloc(): GAIEcommerceProduct; // inherited from NSObject

    static new(): GAIEcommerceProduct; // inherited from NSObject

    buildWithIndex(index: number): NSDictionary<any, any>;

    buildWithListIndexIndex(lIndex: number, index: number): NSDictionary<any, any>;

    setBrand(productBrand: string): GAIEcommerceProduct;

    setCategory(productCategory: string): GAIEcommerceProduct;

    setCouponCode(productCouponCode: string): GAIEcommerceProduct;

    setCustomDimensionValue(index: number, value: string): GAIEcommerceProduct;

    setCustomMetricValue(index: number, value: number): GAIEcommerceProduct;

    setId(productId: string): GAIEcommerceProduct;

    setName(productName: string): GAIEcommerceProduct;

    setPosition(productPosition: number): GAIEcommerceProduct;

    setPrice(productPrice: number): GAIEcommerceProduct;

    setQuantity(productQuantity: number): GAIEcommerceProduct;

    setVariant(productVariant: string): GAIEcommerceProduct;
}

declare class GAIEcommerceProductAction extends NSObject {

    static alloc(): GAIEcommerceProductAction; // inherited from NSObject

    static new(): GAIEcommerceProductAction; // inherited from NSObject

    build(): NSDictionary<any, any>;

    setAction(productAction: string): GAIEcommerceProductAction;

    setAffiliation(affiliation: string): GAIEcommerceProductAction;

    setCheckoutOption(checkoutOption: string): GAIEcommerceProductAction;

    setCheckoutStep(checkoutStep: number): GAIEcommerceProductAction;

    setCouponCode(couponCode: string): GAIEcommerceProductAction;

    setProductActionList(productActionList: string): GAIEcommerceProductAction;

    setProductListSource(productListSource: string): GAIEcommerceProductAction;

    setRevenue(revenue: number): GAIEcommerceProductAction;

    setShipping(shipping: number): GAIEcommerceProductAction;

    setTax(tax: number): GAIEcommerceProductAction;

    setTransactionId(transactionId: string): GAIEcommerceProductAction;
}

declare class GAIEcommercePromotion extends NSObject {

    static alloc(): GAIEcommercePromotion; // inherited from NSObject

    static new(): GAIEcommercePromotion; // inherited from NSObject

    buildWithIndex(index: number): NSDictionary<any, any>;

    setCreative(creative: string): GAIEcommercePromotion;

    setId(pid: string): GAIEcommercePromotion;

    setName(name: string): GAIEcommercePromotion;

    setPosition(position: string): GAIEcommercePromotion;
}

declare const enum GAIErrorCode {

    kGAINoError = 0,

    kGAIDatabaseError = 1,

    kGAINetworkError = 2
}

declare class GAIFields extends NSObject {

    static alloc(): GAIFields; // inherited from NSObject

    static contentGroupForIndex(index: number): string;

    static customDimensionForIndex(index: number): string;

    static customMetricForIndex(index: number): string;

    static new(): GAIFields; // inherited from NSObject
}

declare const enum GAILogLevel {

    kGAILogLevelNone = 0,

    kGAILogLevelError = 1,

    kGAILogLevelWarning = 2,

    kGAILogLevelInfo = 3,

    kGAILogLevelVerbose = 4
}

interface GAILogger extends NSObjectProtocol {

    logLevel: GAILogLevel;

    error(message: string): void;

    info(message: string): void;

    verbose(message: string): void;

    warning(message: string): void;
}

declare var GAILogger: {

    prototype: GAILogger;
};

declare class GAITrackedViewController extends UIViewController {

    static alloc(): GAITrackedViewController; // inherited from NSObject

    static new(): GAITrackedViewController; // inherited from NSObject

    screenName: string;

    tracker: GAITracker;
}

interface GAITracker extends NSObjectProtocol {

    allowIDFACollection: boolean;

    name: string;

    get(parameterName: string): string;

    send(parameters: NSDictionary<any, any>): void;

    setValue(parameterName: string, value: string): void;
}

declare var GAITracker: {

    prototype: GAITracker;
};

declare var kGAIAdMobHitId: string;

declare var kGAIAdTargetingEnabled: string;

declare var kGAIAnonymizeIp: string;

declare var kGAIAppId: string;

declare var kGAIAppInstallerId: string;

declare var kGAIAppName: string;

declare var kGAIAppVersion: string;

declare var kGAIAppView: string;

declare var kGAICampaignAdNetworkClickId: string;

declare var kGAICampaignAdNetworkId: string;

declare var kGAICampaignContent: string;

declare var kGAICampaignId: string;

declare var kGAICampaignKeyword: string;

declare var kGAICampaignMedium: string;

declare var kGAICampaignName: string;

declare var kGAICampaignSource: string;

declare var kGAICheckoutOption: string;

declare var kGAICheckoutStep: string;

declare var kGAIClientId: string;

declare var kGAICurrencyCode: string;

declare var kGAIDataSource: string;

declare var kGAIDescription: string;

declare var kGAIDeviceModelVersion: string;

declare var kGAIEncoding: string;

declare var kGAIErrorDomain: string;

declare var kGAIEvent: string;

declare var kGAIEventAction: string;

declare var kGAIEventCategory: string;

declare var kGAIEventLabel: string;

declare var kGAIEventValue: string;

declare var kGAIExDescription: string;

declare var kGAIExFatal: string;

declare var kGAIException: string;

declare var kGAIFlashVersion: string;

declare var kGAIHitType: string;

declare var kGAIHostname: string;

declare var kGAIIdfa: string;

declare var kGAIImpressionListSource: string;

declare var kGAIImpressionName: string;

declare var kGAIImpressionProduct: string;

declare var kGAIImpressionProductBrand: string;

declare var kGAIImpressionProductCategory: string;

declare var kGAIImpressionProductId: string;

declare var kGAIImpressionProductName: string;

declare var kGAIImpressionProductPosition: string;

declare var kGAIImpressionProductPrice: string;

declare var kGAIImpressionProductVariant: string;

declare var kGAIItem: string;

declare var kGAIItemCategory: string;

declare var kGAIItemName: string;

declare var kGAIItemPrice: string;

declare var kGAIItemQuantity: string;

declare var kGAIItemSku: string;

declare var kGAIJavaEnabled: string;

declare var kGAILanguage: string;

declare var kGAILocation: string;

declare var kGAINonInteraction: string;

declare var kGAIPAAdd: string;

declare var kGAIPAAffiliation: string;

declare var kGAIPACheckout: string;

declare var kGAIPACheckoutOption: string;

declare var kGAIPAClick: string;

declare var kGAIPACouponCode: string;

declare var kGAIPADetail: string;

declare var kGAIPAPurchase: string;

declare var kGAIPARefund: string;

declare var kGAIPARemove: string;

declare var kGAIPARevenue: string;

declare var kGAIPAShipping: string;

declare var kGAIPATax: string;

declare var kGAIPATransactionId: string;

declare var kGAIPage: string;

declare var kGAIProduct: string;

declare var kGAIProductAction: string;

declare var kGAIProductActionList: string;

declare var kGAIProductBrand: string;

declare var kGAIProductCategory: string;

declare var kGAIProductCouponCode: string;

declare var kGAIProductId: string;

declare var kGAIProductListSource: string;

declare var kGAIProductName: string;

declare var kGAIProductPosition: string;

declare var kGAIProductPrice: string;

declare var kGAIProductQuantity: string;

declare var kGAIProductVariant: string;

declare var kGAIPromotionAction: string;

declare var kGAIPromotionClick: string;

declare var kGAIPromotionCreative: string;

declare var kGAIPromotionId: string;

declare var kGAIPromotionName: string;

declare var kGAIPromotionPosition: string;

declare var kGAIPromotionView: string;

declare var kGAIReferrer: string;

declare var kGAISampleRate: string;

declare var kGAIScreenColors: string;

declare var kGAIScreenName: string;

declare var kGAIScreenResolution: string;

declare var kGAIScreenView: string;

declare var kGAISessionControl: string;

declare var kGAISocial: string;

declare var kGAISocialAction: string;

declare var kGAISocialNetwork: string;

declare var kGAISocialTarget: string;

declare var kGAITiming: string;

declare var kGAITimingCategory: string;

declare var kGAITimingLabel: string;

declare var kGAITimingValue: string;

declare var kGAITimingVar: string;

declare var kGAITitle: string;

declare var kGAITrackingId: string;

declare var kGAITransaction: string;

declare var kGAITransactionAffiliation: string;

declare var kGAITransactionId: string;

declare var kGAITransactionRevenue: string;

declare var kGAITransactionShipping: string;

declare var kGAITransactionTax: string;

declare var kGAIUseSecure: string;

declare var kGAIUserId: string;

declare var kGAIVersion: string;

declare var kGAIViewportSize: string;
