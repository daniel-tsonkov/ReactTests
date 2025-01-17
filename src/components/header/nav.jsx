export default function Nav() {
  const navItems = [
    { id: '1', link: '/articles', title: 'Articles' },
    { id: '2', link: '/sports', title: 'sports' },
    { id: '3', link: '/Music', title: 'Music' },
    { id: '4', link: '/Art', title: 'Art' },
    { id: '5', link: '/Hystory', title: 'Hystory' },
    { id: '6', link: '/Contacts', title: 'Contacts' },
  ];

  return (
    <nav className="mainNav">
      <ul>
        {navItems.map((item) => (
          <li className="navItem" key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
