import{a7 as o}from"./iframe-Da53zzTq.js";import{u as S}from"./useProfileLayout-DHr-d-XV.js";import{u as c,B as g}from"./useBookmarks-2CdKgeaM.js";import{L as k}from"./Layout--3fNWm7q.js";import{P as x}from"./PageBase-7xQpePmG.js";import{H as p}from"./Heading-DscqP9Yc.js";import{T as b}from"./Toolbar-WPt-0zLw.js";import{B as I}from"./BookmarkModal-snS2ycN5.js";import{u as h}from"./useInboxLayout-dEp9snnB.js";import{u as f}from"./useAccountMenu-BvdRAmPi.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CP95Nmnr.js";import"./Bell-HCYSbBOR.js";import"./Bookmark-DIIwwtSj.js";import"./ClockDashed-WhXUVnqH.js";import"./globalMenu-ftdJOC73.js";import"./PersonCircle-UPehwCUm.js";import"./Buildings2-ZV3Q-fFf.js";import"./InboxFill-DrTrmOOe.js";import"./MenuGrid-CjMwQH3h.js";import"./MagnifyingGlass-bfd6ClVE.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BPAYx93c.js";import"./Trash-CFLNIgyC.js";import"./useLayout-C4bCB44Z.js";import"./useLocale-Mw6BRR6v.js";import"./header-D4Wv07tK.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DY0SSfK5.js";import"./BookmarkSettingsItem-Zm4BQQrz.js";import"./QueryLabel-C4bOv65v.js";import"./Plus-D8GF-Tra.js";import"./SettingsItemBase-Bk5ZV-QL.js";import"./ItemMedia-DBIH2IUr.js";import"./Avatar-CNmsZKUa.js";import"./AvatarGroup-CiKX_xpR.js";import"./ChevronUp-kw1y4I9y.js";import"./ChevronDown-n3Y6y8IU.js";import"./ChevronRight-R352om1g.js";import"./ItemBase-DxSyPEoM.js";import"./ItemLink-LSrTzTCf.js";import"./ItemControls-ohsHtP8K.js";import"./Badge-Cz-Xpmja.js";import"./Tooltip-Ovi09slt.js";import"./Typography-Dy4MqSc4.js";import"./useHighlightedText-CRKmbQjK.js";import"./ContextMenu-C2mB4zeU.js";import"./useDropdownMenuController-XTqI9DN8.js";import"./Dropdown-CHEaMzgw.js";import"./SearchField-C_K7QMu3.js";import"./FieldBase-BU_zP5Yv.js";import"./Field-BfWcyiGr.js";import"./Label-BttEpvGq.js";import"./Input-CoMQYpcI.js";import"./MenuListItem-miRB5bIM.js";import"./MenuListHeading-DpZURBIT.js";import"./MenuItem-CyggXvzt.js";import"./Checkmark-y0isgIvR.js";import"./ItemLabel-DluBJ4yx.js";import"./index-nqILkJZM.js";import"./InformationSquare-B_LCnSe8.js";import"./MenuElipsisHorizontal-C9QTcmdo.js";import"./Pencil-DKKwGeYz.js";import"./SkipLink-DFUaYnYK.js";import"./Banner-a6YxsrH0.js";import"./GlobalHeader-B3gZUjPG.js";import"./useIsDesktop-Bce_WwsS.js";import"./GlobalAccountButton-Bk9OXKZz.js";import"./Enter-wL9t8S3m.js";import"./GlobalMenuButton-DyO7-BtI.js";import"./MenuHamburger-C3wVymzF.js";import"./AccountSelector-CAI6zt-c.js";import"./Switch-DAQ_sxHW.js";import"./AccountMenu-DrARlzRz.js";import"./GlobalMenu-DE0duDCs.js";import"./ArrowUndo-G4gIgZFZ.js";import"./Globe-D3SqfVz8.js";import"./BreadcrumbsLink-CJdOFiGK.js";import"./ArrowRight-DypIxPg4.js";import"./Footer-EEwlh3cQ.js";import"./Flex-D2KvdX5w.js";import"./ButtonGroup-D9Sva-zY.js";import"./ButtonGroupDivider-9oaQ3ONq.js";import"./ChevronUpDown-B6NVOUD7.js";import"./ToolbarMenu-D1PuGl8y.js";import"./ToolbarSearch-XHPG1jch.js";import"./SettingsModal-BEEglA2y.js";import"./ModalBody-CWm38mqT.js";import"./Section-CfHJUgK6.js";import"./ButtonIcon-D9kRL-nY.js";import"./ButtonLabel-D6-xX-4X.js";import"./TextField-SHZ6OI7S.js";import"./inboxMenu-DZ2CaAgu.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};const ke=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,ke as __namedExportsOrder,ge as default};
