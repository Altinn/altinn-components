import { ArchiveIcon, ArrowRedoIcon, CheckmarkIcon, EyeClosedIcon, TrashIcon, XMarkIcon } from "@navikt/aksel-icons";
import {
    Layout,
    PageBase,
    Toolbar,
    ToolbarMenu,
    Heading,
    DialogList,
    type DialogListProps,
    BulkHeader,
    BulkFooter,
    BulkToolbar,
    ContextMenu,
    ItemSelect,
    Button,
} from "../";
import { useInbox } from "../../../examples"
import { useState } from "react";

const meta = {
    title: "Bulk/BulkMode",
    tags: ["beta"],
    parameters: {
        layout: "fullscreen",
    },
    args: {},
};

export default meta;

export const Default = ({ defaultBulkIds = [] }: { defaultBulkIds?: string[] }) => {
    const {
        layout,
        toolbar,
        results,
    } = useInbox({});

    const bulkToolbar = {
        items: [
            {
                icon: ArrowRedoIcon,
                label: "Del og gi tilgang",
            },
            {
                icon: EyeClosedIcon,
                label: "Marker som lest",
            },
            {
                icon: ArchiveIcon,
                label: "Flytt til arkiv",
            },
            {
                icon: TrashIcon,
                label: "Flytt til papirkurv",
            },
        ],
    }

    const [bulkIds, setBulkIds] = useState<string[]>(defaultBulkIds);
    const bulkMode = bulkIds.length > 0;

    const onToggle = (id: string) => {
        if (bulkIds.includes(id)) {
            setBulkIds(bulkIds.filter((item) => item !== id));
        } else {
            setBulkIds([...bulkIds, id]);
        }
    };

    const items = results?.items?.map((item, index) => {

        const id = "item-" + index;

        const itemContextMenu = {
            items: [
                {
                    groupId: "1",
                    icon: CheckmarkIcon,
                    label: "Velg flere ...",
                    onClick: () => onToggle(id),
                },
                {
                    groupId: "2",
                    icon: ArrowRedoIcon,
                    label: "Del og gi tilgang",
                },
                {
                    groupId: "2",
                    icon: EyeClosedIcon,
                    label: "Marker som lest",
                },
                {
                    groupId: "3",
                    icon: ArchiveIcon,
                    label: "Flytt til arkiv",
                },
                {
                    groupId: "3",
                    icon: TrashIcon,
                    label: "Flytt til papirkurv",
                },
            ]
        }

        return {
            ...item,
            id,
            selected: bulkIds?.includes(id),
            onClick: () => onToggle(id),
            controls: bulkMode ? <ItemSelect selected={bulkIds?.includes(id)} onClick={() => onToggle(id)} /> : <ContextMenu {...itemContextMenu} />,
        }
    }) as DialogListProps['items']

    const selectAll = () => {
        setBulkIds(items?.map((item) => item.id) || []);
    };

    const unselectAll = () => {
        setBulkIds([]);
    };

    const sidebar = {
        ...layout?.sidebar,
        hidden: bulkMode,
    }

    const bulkOptionsMenu = {
        label: bulkIds?.length + ' valgt',
        items: [
            {
                groupId: "1",
                role: "checkbox",
                title: "Velg alle"
            },
            {
                groupId: "2",
                role: "checkbox",
                title: "Alle uleste"
            },
            {
                groupId: "2",
                role: "checkbox",
                title: "Alle leste"
            }
        ],
        groups: {
            1: { title: "2 av 10 valgt" }
        }
    }

    const accountMenu = toolbar?.accountMenu
    const currentAccount = accountMenu?.items?.find(item => item.selected) || accountMenu?.items[0]

    return (
        <Layout {...layout} sidebar={sidebar} useGlobalHeader={true}>
            <BulkHeader
                hidden={true || !bulkMode}
                title={bulkIds?.length + " valgt"}
                dismissable={true}
                onDismiss={unselectAll}
            />
            <PageBase>
                <Heading size="xl">Innboks</Heading>
                {bulkMode ? (
                    <Toolbar>
                        <ToolbarMenu {...bulkOptionsMenu} />
                        <Button variant="outline" onClick={selectAll}>
                            <CheckmarkIcon />
                            <span>
                                Velg alle
                            </span>
                        </Button>
                        <Button variant="ghost" onClick={unselectAll}>
                            <XMarkIcon />
                            <span>
                                Avbryt
                            </span>
                        </Button>
                    </Toolbar>
                ) : <Toolbar {...toolbar} accountMenu={{ ...accountMenu, label: currentAccount?.name }} />}
                {results && (
                    <DialogList items={items} groups={results?.groups} />
                )}
            </PageBase>
            <BulkFooter
                hidden={!bulkMode}>
                {bulkToolbar && (
                    <BulkToolbar items={bulkToolbar.items} />
                )}
            </BulkFooter>
        </Layout>
    );
};

export const BulkModeOn = () => {

    return <Default defaultBulkIds={["item-0", "item-1"]} />;

};