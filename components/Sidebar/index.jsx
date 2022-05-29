import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const router = useRouter();
  const { pathname } = router;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`!fixed border-r border-sec flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#F2F4F5] md:bg-white p-4 transition-all duration-200 ease-in-out h-[100vh] ${
          sidebarOpen ? 'translate-x-0 !w-full' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Logo */}
          <Link href="/">
            <a className="block">
              <svg
                width="43"
                height="36"
                viewBox="0 0 43 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2489 7.87925C19.2736 6.16921 24.5476 8.02628 26.0275 12.0281C27.5074 16.0299 24.6338 20.6614 19.6092 22.3715C14.5845 24.0815 9.31059 22.2244 7.83068 18.2226C6.35078 14.2208 9.22429 9.58929 14.2489 7.87925Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1531 23.4359C17.2375 23.1897 19.8617 24.5258 20.0152 26.4212C20.1654 28.3167 17.7873 30.0523 14.7028 30.2984C11.6184 30.5445 8.99417 29.2084 8.84074 27.313C8.68732 25.4176 11.0654 23.682 14.1531 23.4359Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.6279 18.9961C28.5238 17.1518 31.8544 17.219 33.0658 19.1464C34.2804 21.0738 32.9155 24.1295 30.0196 25.9738C27.1238 27.818 23.7932 27.7509 22.5818 25.8235C21.3703 23.8961 22.7352 20.8404 25.6279 18.9961Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.7179 30.6468C22.0704 30.2888 24.1704 31.1774 24.4069 32.6349C24.6435 34.0924 22.927 35.5628 20.5745 35.9208C18.222 36.2788 16.122 35.3902 15.8855 33.9326C15.649 32.4751 17.3654 31.0048 19.7179 30.6468Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.9964 13.1852C26.4174 10.8934 26.6891 8.22766 28.6037 7.2304C30.5183 6.23314 33.3535 7.28154 34.9325 9.57651C36.5115 11.8683 36.2398 14.534 34.3252 15.5313C32.4106 16.5254 29.5786 15.477 27.9964 13.1852Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.52792 21.9879C2.0197 20.019 2.87313 18.261 4.43614 18.0564C5.99916 17.8518 7.68043 19.2838 8.18865 21.2496C8.69687 23.2185 7.84343 24.9765 6.28042 25.181C4.71741 25.3856 3.03933 23.9569 2.52792 21.9879Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.84076 28.3422C1.50515 27.0445 2.0677 25.8843 3.10012 25.75C4.13254 25.6158 5.23847 26.5587 5.57729 27.8564C5.9129 29.1541 5.35035 30.3144 4.31793 30.4486C3.28551 30.5829 2.17638 29.64 1.84076 28.3422Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.27316 11.3345C5.28321 9.81304 6.86858 9.08107 7.8179 9.69797C8.76721 10.3149 8.71608 12.0473 7.70923 13.5656C6.69919 15.087 5.11379 15.819 4.16448 15.2021C3.21517 14.5852 3.26312 12.8528 4.27316 11.3345Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9252 4.26738C13.6384 3.32126 15.5498 3.33404 16.1955 4.29614C16.838 5.25824 15.9686 6.80527 14.2553 7.75139C12.5421 8.69751 10.6307 8.68472 9.98501 7.72262C9.34255 6.76052 10.212 5.21349 11.9252 4.26738Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.4448 2.80985C26.0083 2.63725 28.2681 3.42354 28.4886 4.56464C28.7124 5.70573 26.8137 6.76693 24.2503 6.93953C21.6868 7.11213 19.427 6.32582 19.2064 5.18473C18.9827 4.04364 20.8781 2.98245 23.4448 2.80985Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.8918 19.2934C38.6914 17.9925 41.0215 18.1363 42.0987 19.613C43.1758 21.0897 42.5909 23.3399 40.7914 24.6377C38.9918 25.9386 36.6617 25.7947 35.5845 24.318C34.5074 22.8445 35.0923 20.5943 36.8918 19.2934Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.0215 1.86053C35.3927 2.34638 36.2397 3.58016 35.9105 4.61578C35.5813 5.65459 34.2037 6.10208 32.8324 5.61623C31.4612 5.13039 30.6142 3.8966 30.9434 2.86099C31.2726 1.82218 32.6503 1.37469 34.0215 1.86053Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.6055 0.243188C19.737 -0.153159 20.9069 -0.0540745 21.2201 0.460537C21.5334 0.975148 20.8717 1.7103 19.7402 2.10665C18.6087 2.4998 17.4389 2.40391 17.1256 1.8893C16.8156 1.37469 17.4772 0.639534 18.6055 0.243188Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.07272 6.93633C6.91016 6.10848 7.96175 5.59387 8.41883 5.78565C8.8791 5.97743 8.57226 6.80528 7.73482 7.63313C6.89738 8.46099 5.84578 8.9756 5.3887 8.78382C4.92843 8.59204 5.23528 7.76418 6.07272 6.93633Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.111509 16.634C0.380002 15.5473 1.04805 14.6523 1.60102 14.6331C2.15718 14.6139 2.38731 15.4802 2.11882 16.5637C1.85033 17.6505 1.18228 18.5454 0.629315 18.5646C0.0763481 18.587 -0.156983 17.7208 0.111509 16.634Z"
                  fill="#5B44E9"
                />
              </svg>
            </a>
          </Link>
          <div></div>

          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#EDEFFC" />
              <path
                d="M23 13L13 23M13 13L23 23"
                stroke="#090A0A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul className="">
              {/* Profile */}
              <li
                className={`px-3 py-2 rounded-4xl mb-4 last:mb-0 ${
                  pathname.includes('/dashboard/profile') && ' bg-primary'
                }`}
              >
                <Link href="/dashboard/profile">
                  <a
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('/dashboard/profile') &&
                      'hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        className="shrink-0 h-6 w-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.842 10.6197L11.9004 10.6217L11.9414 10.6135C11.9518 10.613 11.968 10.6125 11.9896 10.6125C12.034 10.6125 12.0887 10.6145 12.1412 10.6185L12.1718 10.6209L12.2025 10.6195C14.431 10.5171 16.1782 8.6862 16.1896 6.44253V6.44C16.1896 4.13386 14.3057 2.25 11.9996 2.25C9.69343 2.25 7.80957 4.13386 7.80957 6.44C7.80957 8.70956 9.58311 10.5402 11.842 10.6197ZM12.1596 11.12H12.1594H12.1592H12.159H12.1589H12.1587H12.1585H12.1583H12.1582H12.158H12.1578H12.1577H12.1575H12.1573H12.1571H12.157H12.1568H12.1566H12.1564H12.1563H12.1561H12.1559H12.1558H12.1556H12.1554H12.1552H12.1551H12.1549H12.1547H12.1546H12.1544H12.1542H12.1541H12.1539H12.1537H12.1536H12.1534H12.1532H12.153H12.1529H12.1527H12.1525H12.1524H12.1522H12.152H12.1519H12.1517H12.1515H12.1514H12.1512H12.151H12.1509H12.1507H12.1506H12.1504H12.1502H12.1501H12.1499H12.1497H12.1496H12.1494H12.1492H12.1491H12.1489H12.1487H12.1486H12.1484H12.1483H12.1481H12.1479H12.1478H12.1476H12.1475H12.1473H12.1471H12.147H12.1468H12.1466H12.1465H12.1463H12.1462H12.146H12.1458H12.1457H12.1455H12.1454H12.1452H12.145H12.1449H12.1447H12.1446H12.1444H12.1443H12.1441H12.1439H12.1438H12.1436H12.1435H12.1433H12.1431H12.143H12.1428H12.1427H12.1425H12.1424H12.1422H12.142H12.1419H12.1417H12.1416H12.1414H12.1413H12.1411H12.141H12.1408H12.1406H12.1405H12.1403H12.1402H12.14H12.1399H12.1397H12.1396H12.1394H12.1392H12.1391H12.1389H12.1388H12.1386H12.1385H12.1383H12.1382H12.138H12.1379H12.1377H12.1376H12.1374H12.1373H12.1371H12.1369H12.1368H12.1366H12.1365H12.1363H12.1362H12.136H12.1359H12.1357H12.1356H12.1354H12.1353H12.1351H12.135H12.1348H12.1347H12.1345H12.1344H12.1342H12.1341H12.1339H12.1338H12.1336H12.1335H12.1333H12.1332H12.133H12.1329H12.1327H12.1326H12.1324H12.1323H12.1321H12.132H12.1318H12.1317H12.1315H12.1314H12.1312H12.1311H12.1309H12.1308H12.1306H12.1305H12.1303H12.1302H12.13H12.1299H12.1297H12.1296H12.1294H12.1293H12.1291H12.129H12.1288H12.1287H12.1285H12.1284H12.1282H12.1281H12.1279H12.1278H12.1277H12.1275H12.1274H12.1272H12.1271H12.1269H12.1268H12.1266H12.1265H12.1263H12.1262H12.126H12.1259H12.1257H12.1256H12.1254H12.1253H12.1251H12.125H12.1249H12.1247H12.1246H12.1244H12.1243H12.1241H12.124H12.1238H12.1237H12.1235H12.1234H12.1232H12.1231H12.1229H12.1228H12.1226H12.1225H12.1224H12.1222H12.1221H12.1219H12.1218H12.1216H12.1215H12.1213H12.1212H12.121H12.1209H12.1207H12.1206H12.1204H12.1203H12.1202H12.12H12.1199H12.1197H12.1196H12.1194H12.1193H12.1191H12.119H12.1188H12.1187H12.1185H12.1184H12.1183H12.1181H12.118H12.1178H12.1177H12.1175H12.1175C12.0362 11.1098 11.952 11.1106 11.8754 11.1189C9.26221 11.0178 7.30957 8.96409 7.30957 6.44C7.30957 3.85614 9.41571 1.75 11.9996 1.75C14.5831 1.75 16.689 3.85562 16.6896 6.43903C16.6801 8.97998 14.6952 11.0348 12.1813 11.12H12.1813H12.1812H12.1812H12.1811H12.1811H12.181H12.181H12.1809H12.1808H12.1808H12.1807H12.1807H12.1806H12.1805H12.1805H12.1804H12.1804H12.1803H12.1803H12.1802H12.1801H12.1801H12.18H12.18H12.1799H12.1798H12.1798H12.1797H12.1797H12.1796H12.1796H12.1795H12.1794H12.1794H12.1793H12.1793H12.1792H12.1791H12.1791H12.179H12.179H12.1789H12.1788H12.1788H12.1787H12.1787H12.1786H12.1786H12.1785H12.1784H12.1784H12.1783H12.1783H12.1782H12.1781H12.1781H12.178H12.178H12.1779H12.1779H12.1778H12.1777H12.1777H12.1776H12.1776H12.1775H12.1774H12.1774H12.1773H12.1773H12.1772H12.1771H12.1771H12.177H12.177H12.1769H12.1769H12.1768H12.1767H12.1767H12.1766H12.1766H12.1765H12.1764H12.1764H12.1763H12.1763H12.1762H12.1762H12.1761H12.176H12.176H12.1759H12.1759H12.1758H12.1757H12.1757H12.1756H12.1756H12.1755H12.1754H12.1754H12.1753H12.1753H12.1752H12.1752H12.1751H12.175H12.175H12.1749H12.1749H12.1748H12.1747H12.1747H12.1746H12.1746H12.1745H12.1745H12.1744H12.1743H12.1743H12.1742H12.1742H12.1741H12.174H12.174H12.1739H12.1739H12.1738H12.1737H12.1737H12.1736H12.1736H12.1735H12.1735H12.1734H12.1733H12.1733H12.1732H12.1732H12.1731H12.173H12.173H12.1729H12.1729H12.1728H12.1728H12.1727H12.1726H12.1726H12.1725H12.1725H12.1724H12.1723H12.1723H12.1722H12.1722H12.1721H12.1721H12.172H12.1719H12.1719H12.1718H12.1718H12.1717H12.1716H12.1716H12.1715H12.1715H12.1714H12.1713H12.1713H12.1712H12.1712H12.1711H12.1711H12.171H12.1709H12.1709H12.1708H12.1708H12.1707H12.1706H12.1706H12.1705H12.1705H12.1704H12.1704H12.1703H12.1702H12.1702H12.1701H12.1701H12.17H12.1699H12.1699H12.1698H12.1698H12.1697H12.1696H12.1696H12.1695H12.1695H12.1694H12.1694H12.1693H12.1692H12.1692H12.1691H12.1691H12.169H12.1689H12.1689H12.1688H12.1688H12.1687H12.1687H12.1686H12.1685H12.1685H12.1684H12.1684H12.1683H12.1682H12.1682H12.1681H12.1681H12.168H12.1679H12.1679H12.1678H12.1678H12.1677H12.1677H12.1676H12.1675H12.1675H12.1674H12.1674H12.1673H12.1672H12.1672H12.1671H12.1671H12.167H12.167H12.1669H12.1668H12.1668H12.1667H12.1667H12.1666H12.1665H12.1665H12.1664H12.1664H12.1663H12.1662H12.1662H12.1661H12.1661H12.166H12.166H12.1659H12.1658H12.1658H12.1657H12.1657H12.1656H12.1655H12.1655H12.1654H12.1654H12.1653H12.1653H12.1652H12.1651H12.1651H12.165H12.165H12.1649H12.1648H12.1648H12.1647H12.1647H12.1646H12.1646H12.1645H12.1644H12.1644H12.1643H12.1643H12.1642H12.1641H12.1641H12.164H12.164H12.1639H12.1638H12.1638H12.1637H12.1637H12.1636H12.1636H12.1635H12.1634H12.1634H12.1633H12.1633H12.1632H12.1631H12.1631H12.163H12.163H12.1629H12.1629H12.1628H12.1627H12.1627H12.1626H12.1626H12.1625H12.1624H12.1624H12.1623H12.1623H12.1622H12.1621H12.1621H12.162H12.162H12.1619H12.1619H12.1618H12.1617H12.1617H12.1616H12.1616H12.1615H12.1614H12.1614H12.1613H12.1613H12.1612H12.1612H12.1611H12.161H12.161H12.1609H12.1609H12.1608H12.1607H12.1607H12.1606H12.1606H12.1605H12.1604H12.1604H12.1603H12.1603H12.1602H12.1602H12.1601H12.16H12.16H12.1599H12.1599H12.1598H12.1597H12.1597H12.1596H12.1596Z"
                          fill={
                            pathname.includes('/dashboard/profile')
                              ? '#fff'
                              : '#5B44E9'
                          }
                          stroke={
                            pathname.includes('/dashboard/profile')
                              ? '#fff'
                              : '#5B44E9'
                          }
                        />
                        <path
                          d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z"
                          fill={
                            pathname.includes('/dashboard/profile')
                              ? '#fff'
                              : '#5B44E9'
                          }
                        />
                      </svg>

                      <span
                        className={
                          ' ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-lg font-medium ' +
                          (pathname.includes('/dashboard/profile')
                            ? 'text-white'
                            : 'text-secondary_ink_dark')
                        }
                      >
                        Profile
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              {/* Products */}
              <li
                className={`px-3 py-2 rounded-4xl mb-4 last:mb-0 ${
                  pathname.includes('/dashboard/products') && 'bg-primary'
                }`}
              >
                <Link href="/dashboard/products">
                  <a
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('/dashboard/products') &&
                      'hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        className="shrink-0 h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 16.25H5.43C4.17419 16.25 3.27277 15.9059 2.68449 15.3186C2.09636 14.7315 1.75 13.8304 1.75 12.57V5.43C1.75 4.17419 2.09412 3.27277 2.68137 2.68449C3.26846 2.09636 4.16963 1.75 5.43 1.75H10C11.2558 1.75 12.1572 2.09412 12.7455 2.68137C13.3336 3.26846 13.68 4.16963 13.68 5.43C13.68 5.56386 13.5639 5.68 13.43 5.68C13.2961 5.68 13.18 5.56386 13.18 5.43C13.18 4.4331 12.9699 3.6028 12.3986 3.03145C11.8272 2.46009 10.9969 2.25 10 2.25H5.43C4.4331 2.25 3.6028 2.46009 3.03145 3.03145C2.46009 3.6028 2.25 4.4331 2.25 5.43V12.57C2.25 13.5669 2.46009 14.3972 3.03145 14.9686C3.6028 15.5399 4.4331 15.75 5.43 15.75H8C8.13386 15.75 8.25 15.8661 8.25 16C8.25 16.1339 8.13386 16.25 8 16.25Z"
                          fill={
                            pathname.includes('/dashboard/products')
                              ? '#fff'
                              : '#5B44E9'
                          }
                          stroke={
                            pathname.includes('/dashboard/products')
                              ? '#fff'
                              : '#5B44E9'
                          }
                        />
                        <path
                          d="M18.5699 22.25H13.9999C12.7441 22.25 11.8427 21.9059 11.2544 21.3186C10.6663 20.7315 10.3199 19.8304 10.3199 18.57V11.43C10.3199 10.1742 10.6641 9.27277 11.2513 8.68449C11.8384 8.09636 12.7396 7.75 13.9999 7.75H18.5699C19.8258 7.75 20.7272 8.09412 21.3155 8.68137C21.9036 9.26846 22.2499 10.1696 22.2499 11.43V18.57C22.2499 19.8313 21.9056 20.7322 21.3189 21.3189C20.7322 21.9057 19.8312 22.25 18.5699 22.25ZM13.9999 8.25C13.003 8.25 12.1727 8.4601 11.6014 9.03145C11.03 9.6028 10.8199 10.4331 10.8199 11.43V18.57C10.8199 19.5669 11.03 20.3972 11.6014 20.9686C12.1727 21.5399 13.003 21.75 13.9999 21.75H18.5699C19.5668 21.75 20.3971 21.5399 20.9685 20.9686C21.5399 20.3972 21.7499 19.5669 21.7499 18.57V11.43C21.7499 10.4331 21.5399 9.6028 20.9685 9.03145C20.3971 8.4601 19.5668 8.25 18.5699 8.25H13.9999Z"
                          fill={
                            pathname.includes('/dashboard/products')
                              ? '#fff'
                              : '#5B44E9'
                          }
                          stroke={
                            pathname.includes('/dashboard/products')
                              ? '#fff'
                              : '#5B44E9'
                          }
                        />
                        <path
                          d="M18.13 15.25H14.88C14.7461 15.25 14.63 15.1339 14.63 15C14.63 14.8661 14.7461 14.75 14.88 14.75H18.13C18.2639 14.75 18.38 14.8661 18.38 15C18.38 15.1339 18.2639 15.25 18.13 15.25Z"
                          fill={
                            pathname.includes('/dashboard/products')
                              ? '#fff'
                              : '#5B44E9'
                          }
                          stroke={
                            pathname.includes('/dashboard/products')
                              ? '#fff'
                              : '#5B44E9'
                          }
                        />
                        <path
                          d="M16.5 17.3799C16.09 17.3799 15.75 17.0399 15.75 16.6299V13.3799C15.75 12.9699 16.09 12.6299 16.5 12.6299C16.91 12.6299 17.25 12.9699 17.25 13.3799V16.6299C17.25 17.0399 16.91 17.3799 16.5 17.3799Z"
                          fill={
                            pathname.includes('/dashboard/products')
                              ? '#fff'
                              : '#5B44E9'
                          }
                        />
                      </svg>
                      <span
                        className={
                          ' ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-lg font-medium ' +
                          (pathname.includes('/dashboard/products')
                            ? 'text-white'
                            : 'text-secondary_ink_dark')
                        }
                      >
                        Products
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              {/* Posts */}
              <li
                className={`px-3 py-2 rounded-4xl mb-4 last:mb-0 ${
                  pathname.includes('/dashboard/posts') && 'bg-primary'
                }`}
              >
                <Link href="/dashboard/posts">
                  <a
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('/dashboard/posts') &&
                      'hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        className="shrink-0 h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.6601 10.44L20.6801 14.62C19.8401 18.23 18.1801 19.69 15.0601 19.39C14.5601 19.35 14.0201 19.26 13.4401 19.12L11.7601 18.72C7.59006 17.73 6.30006 15.67 7.28006 11.49L8.26006 7.30001C8.46006 6.45001 8.70006 5.71001 9.00006 5.10001C10.1701 2.68001 12.1601 2.03001 15.5001 2.82001L17.1701 3.21001C21.3601 4.19001 22.6401 6.26001 21.6601 10.44Z"
                          stroke={
                            pathname.includes('/dashboard/posts')
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.06 19.3901C14.44 19.8101 13.66 20.1601 12.71 20.4701L11.13 20.9901C7.15998 22.2701 5.06997 21.2001 3.77997 17.2301L2.49997 13.2801C1.21997 9.3101 2.27997 7.2101 6.24997 5.9301L7.82997 5.4101C8.23997 5.2801 8.62997 5.1701 8.99997 5.1001C8.69997 5.7101 8.45997 6.4501 8.25997 7.3001L7.27997 11.4901C6.29997 15.6701 7.58998 17.7301 11.76 18.7201L13.44 19.1201C14.02 19.2601 14.56 19.3501 15.06 19.3901Z"
                          stroke={
                            pathname.includes('/dashboard/posts')
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.64 8.53003L17.49 9.76003"
                          stroke={
                            pathname.includes('/dashboard/posts')
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.66 12.3999L14.56 13.1399"
                          stroke={
                            pathname.includes('/dashboard/posts')
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span
                        className={
                          ' ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-lg font-medium ' +
                          (pathname.includes('/dashboard/posts')
                            ? 'text-white'
                            : 'text-secondary_ink_dark')
                        }
                      >
                        Posts
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              {/* Payout */}
              <li
                className={`px-3 py-2 rounded-4xl mb-4 last:mb-0 ${
                  pathname.includes('/dashboard/payout') && 'bg-primary'
                }`}
              >
                <Link href="/dashboard/payout">
                  <a
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('/dashboard/payout') &&
                      'hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        className="shrink-0 h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
                          stroke={
                            pathname === '/dashboard/payout'
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6V18"
                          stroke={
                            pathname === '/dashboard/payout'
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke={
                            pathname === '/dashboard/payout'
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span
                        className={
                          ' ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-lg font-medium ' +
                          (pathname === '/dashboard/payout'
                            ? 'text-white'
                            : 'text-secondary_ink_dark')
                        }
                      >
                        Payout
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              {/* Community */}
              <li
                className={`px-3 py-2 rounded-4xl mb-4 last:mb-0 ${
                  pathname.includes('/dashboard/community') && 'bg-primary'
                }`}
              >
                <Link href="/dashboard/community">
                  <a
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('/dashboard/community') &&
                      'hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        className="shrink-0 h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.17 18.48C12.71 18.48 12.26 18.45 11.82 18.39C12.56 17.52 13 16.42 13 15.23C13 12.39 10.54 10.09 7.49997 10.09C6.33997 10.09 5.26997 10.42 4.37997 11C4.34997 10.75 4.33997 10.5 4.33997 10.24C4.33997 5.68999 8.28997 2 13.17 2C18.05 2 22 5.68999 22 10.24C22 12.94 20.61 15.33 18.47 16.83Z"
                          stroke={
                            pathname === '/dashboard/community'
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z"
                          stroke={
                            pathname === '/dashboard/community'
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span
                        className={
                          ' ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-lg font-medium ' +
                          (pathname === '/dashboard/community'
                            ? 'text-white'
                            : 'text-secondary_ink_dark')
                        }
                      >
                        Community
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              {/* Help */}
              <li
                className={`px-3 py-2 rounded-4xl mb-4 last:mb-0 ${
                  pathname.includes('/dashboard/help') && 'bg-primary'
                }`}
              >
                <Link href="/dashboard/help">
                  <a
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('/dashboard/help') &&
                      'hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        className="shrink-0 h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 18.4302H13L8.54999 21.3902C7.88999 21.8302 7 21.3602 7 20.5602V18.4302C4 18.4302 2 16.4302 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018V13.4302C22 16.4302 20 18.4302 17 18.4302Z"
                          stroke={
                            pathname === '/dashboard/help' ? '#fff' : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.0001 11.3599V11.1499C12.0001 10.4699 12.4201 10.1099 12.8401 9.81989C13.2501 9.53989 13.66 9.1799 13.66 8.5199C13.66 7.5999 12.9201 6.85986 12.0001 6.85986C11.0801 6.85986 10.3401 7.5999 10.3401 8.5199"
                          stroke={
                            pathname === '/dashboard/help' ? '#fff' : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.9955 13.75H12.0045"
                          stroke={
                            pathname === '/dashboard/help' ? '#fff' : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span
                        className={
                          ' ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-lg font-medium ' +
                          (pathname === '/dashboard/help'
                            ? 'text-white'
                            : 'text-secondary_ink_dark')
                        }
                      >
                        Help
                      </span>
                    </div>
                  </a>
                </Link>
              </li>

              {/* Settings */}
              <li
                className={`px-3 py-2 rounded-4xl last:mb-0 ${
                  pathname.includes('/dashboard/settings') && 'bg-primary'
                }`}
              >
                <Link href="/dashboard/settings">
                  <a
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('/dashboard/settings') &&
                      'hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        className="shrink-0 h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke={
                            pathname === '/dashboard/settings'
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z"
                          stroke={
                            pathname === '/dashboard/settings'
                              ? '#fff'
                              : '#5B44E9'
                          }
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span
                        className={
                          ' ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-lg font-medium ' +
                          (pathname === '/dashboard/settings'
                            ? 'text-white'
                            : 'text-secondary_ink_dark')
                        }
                      >
                        Settings
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
