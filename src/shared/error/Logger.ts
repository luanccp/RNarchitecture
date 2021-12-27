const format = (tag: string) => `[${tag}]`;

export const Log = {
  i: (tag: string, extra?: any) => {
    const msg = format(tag);
    console.info(msg, extra);
    // trigger any issue manager here (Sentry, crashlytics, etc)
  },

  w: (tag: string, extra?: any) => {
    const msg = format(tag);
    console.warn(msg, extra);
    // trigger any issue manager here (Sentry, crashlytics, etc)
  },

  e: (tag: string, extra?: any) => {
    const msg = format(tag);
    console.error(msg, extra);
    // trigger any issue manager here (Sentry, crashlytics, etc)
  },
};
