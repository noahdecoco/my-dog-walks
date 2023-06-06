export const getGoogleMapsLink = (address: string) => {
  return `https://www.google.com/maps/dir//${address.replace(/\s+/g, "+")}`;
};

export const openGoogleMaps = (address: string) => {
  window.open(getGoogleMapsLink(address), "_blank");
};
