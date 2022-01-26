import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

import { Avatar } from "nextjs-components/src/components/Avatar";
import { Button } from "nextjs-components/src/components/Button";
import { Editor } from "nextjs-components/src/components/Editor";
import { Checkbox } from "nextjs-components/src/components/Checkbox";
import { ColorCard } from "nextjs-components/src/components/ColorCard";
import { Container } from "nextjs-components/src/components/Container";
import { fs } from "nextjs-components";
import { Tree, Folder, File } from "nextjs-components/src/components/FileTree";
import { LoadingDots } from "nextjs-components/src/components/LoadingDots";
import { Toggle } from "nextjs-components/src/components/Toggle";
import { Spacer } from "nextjs-components/src/components/Spacer";
import { Spinner } from "nextjs-components/src/components/Spinner";
import { Text } from "nextjs-components/src/components/Text";
import { useToasts } from "nextjs-components/src/components/Toast";
import { KBD } from "nextjs-components/src/components/KeyboardInput";
import { Capacity } from "nextjs-components/src/components/Capacity";
import {
  Entity,
  EntityField,
  EntityThumbnail,
} from "nextjs-components/src/components/Entity";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuWrapper,
  MenuLink,
} from "nextjs-components/src/components/Menu";
import { StatusDot } from "nextjs-components/src/components/status-dot";

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowUp as Up,
  GitHub,
  FacebookIcon,
  GoogleIcon,
  MoreHorizontal,
} from "nextjs-components/dist/icons";

const BlueContainer = ({ style, children, ...props }) => (
  <Container
    style={{
      ...style,
      background: "var(--geist-success)",
      color: "rgb(255, 255, 255)",
      padding: "var(--geist-gap-half)",
      borderRadius: "var(--geist-radius)",
    }}
    {...props}
  >
    {children}
  </Container>
);

/**
 * This components fulfill in-MDX code blocks that use JSX.
 */
const editorScope = {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Avatar,
  BlueContainer,
  Button,
  Capacity,
  Checkbox,
  Container,
  Entity,
  EntityField,
  EntityThumbnail,
  Facebook: FacebookIcon,
  File,
  Folder,
  fs,
  GitHub,
  Google: GoogleIcon,
  isMounted: true,
  KBD,
  Link,
  LoadingDots,
  Menu,
  MenuButton,
  MenuItem,
  MenuWrapper,
  MenuLink,
  MoreHorizontal,
  Spacer,
  Spinner,
  StatusDot,
  Text,
  Toggle,
  Tree,
  Up,
  useState,
  useToasts,
};

const mdxComponents = {
  Text,
  h1: (props) => <Text h1 {...props} />,
  h2: (props) => <Text h2 {...props} />,
  h3: (props) => <Text h3 {...props} />,
  h4: (props) => <Text h4 {...props} />,
  h5: (props) => <Text h5 {...props} />,
  h6: (props) => <Text h6 {...props} />,
  p: (props) => <Text p {...props} />,
  pre: ({ children }) => {
    return <Editor scope={editorScope} code={children.props.children} />;
  },
  ColorCard,
  Spacer,
  Link,
};

export default function DesignLayoutInner({ children }) {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}
