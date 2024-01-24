import { PropsWithChildren } from 'react';
import { BaseLayout } from 'ui/base-layout';

type LayoutProps = PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return <BaseLayout title="Мои фильтры">{children}</BaseLayout>;
}
