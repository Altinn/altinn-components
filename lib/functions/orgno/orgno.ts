export const formatOrgNo = (orgNo?: string | null): string | undefined => {
  return orgNo?.match(/.{1,3}/g)?.join(' ');
};
