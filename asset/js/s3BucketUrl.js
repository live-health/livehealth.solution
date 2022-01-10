function getS3PathBucketUrl() {
    let livehealthDomain = document.domain;
    let s3BucketPath = {
      "livehealth.solutions": "https://s3-ap-southeast-1.amazonaws.com/livehealthuser/",
      "www.livehealth.solutions":
        "https://s3-ap-southeast-1.amazonaws.com/livehealthuser/",
      "crelio.solutions": "https://us-livehealth.s3.amazonaws.com/",
      "www.crelio.solutions": "https://us-livehealth.s3.amazonaws.com/",
      "us.crelio.solutions": "https://us-livehealth.s3.amazonaws.com/",
      "us.livehealth.solutions": "https://us-livehealth.s3.amazonaws.com/",
      "uk.crelio.solutions": "https://uk-livehealth.s3.amazonaws.com/",
      "uk.livehealth.solutions": "https://uk-livehealth.s3.amazonaws.com/",
      "uae.crelio.solutions": "https://s3-ap-southeast-1.amazonaws.com/livehealthuser/",
      "uae.livehealth.solutions": "https://s3-ap-southeast-1.amazonaws.com/livehealthuser/",
      'eu.crelio.solutions': 'https://eu-livehealth.s3.eu-central-1.amazonaws.com/',
      'eu.livehealth.solutions': 'https://eu-livehealth.s3.eu-central-1.amazonaws.com/'
    };
    if (Object.keys(s3BucketPath).includes(livehealthDomain)) {
        return s3BucketPath[livehealthDomain];
    } else {
      return "https://s3-ap-southeast-1.amazonaws.com/livehealthuser/";
    }
}