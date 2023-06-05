import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    label: (<Link href="/playground-one">Playground 1</Link>),
    key: 'link1',
    icon: <MailOutlined />,
  },
  {
    label: (<Link href="/playground-two">Playground 2</Link>),
    key: 'link2',
    icon: <MailOutlined />,
  },
  {
    label: (<Link href="/playground-three">Playground 3</Link>),
    key: 'link3',
    icon: <SettingOutlined />,
  },
];

export const AntdMenu: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};