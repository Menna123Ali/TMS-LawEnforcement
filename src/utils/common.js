export function GetCacheVersion(URL) {
  const CacheData = JSON.parse(localStorage.getItem('CACHE_DATA'))
  var cachVersion = Date.now()
  if (CacheData?.length != 0 && CacheData != null) {
    var cacheData = CacheData?.filter((a) => a.sApiReadUrl?.toLowerCase() == URL?.toLowerCase())
    if (cacheData.length > 0) {
      cachVersion = cacheData[0].nVersion
    }
  }
  return cachVersion
}
