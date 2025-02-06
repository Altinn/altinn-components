import {
  Heading,
  ListBase,
  Flex,
  Button,
  PageBase,
  PageNav,
} from "../../../components";
import { PageHeader, UserAdminListItem, useNavigation, companyUsers } from "..";
import {PackageIcon, PlusIcon} from "@navikt/aksel-icons";

export const CompanyAccessId = () => {
  const { breadcrumbs, articleId, childId, child } = useNavigation();

  const accessId = [articleId, childId].join("/");

  const items = companyUsers?.map((item) => {
    const access = item?.access?.filter((id) => id === accessId);
    const accessCount = access?.length;

    return { ...item, access: accessCount, variant: "access" };
  });

  const hasAccess = items?.filter((item) => item.access);
  const giveAccess = items
    ?.filter((item) => !item.access)
    ?.map((item) => {
      return {
        ...item,
      };
    });

  const title = hasAccess.length + " brukere har fullmakt";

  return (
    <PageBase color="company" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <PageHeader {...child} icon={PackageIcon} />

      <Heading size="lg">{title}</Heading>
      <ListBase>
        {hasAccess?.map((item) => {
          return <UserAdminListItem {...item} size="sm" />;
        })}
      </ListBase>
      <Flex justify="" align="center" spacing={4}>
        <Heading size="lg">Gi tilgang </Heading>
        <Button size="sm" icon={PlusIcon} variant="outline">
          Ny bruker
        </Button>
      </Flex>
      <ListBase>
        {giveAccess?.map((item) => {
          return <UserAdminListItem {...item} size="sm" />;
        })}
      </ListBase>
    </PageBase>
  );
};
