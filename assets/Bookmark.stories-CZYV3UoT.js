var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-DZEBeon6.js";import{u as j}from"./useProfileLayout-CXf2dUOb.js";import{u as g,B as k}from"./useBookmarks-DJyuxN2q.js";import{L as x}from"./Layout-BaW_UD3P.js";import{P as b}from"./PageBase-CMVwyXVx.js";import{H as n}from"./Heading-DnxwPqg0.js";import{T as I}from"./Toolbar-CGN-VVdg.js";import{B as h}from"./BookmarkModal-CjQn4Z-g.js";import{u as C}from"./useInboxLayout-LLsUgmSI.js";import{u as y}from"./useAccountMenu-CXC_H5Ve.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-CsC9vuTq.js";import"./Bell-4Pd7I6Ag.js";import"./Bookmark-BOR1ciHn.js";import"./ClockDashed-FN7mMrSt.js";import"./globalMenu-SyEYbEUZ.js";import"./PersonCircle-pA5aoYOk.js";import"./Buildings2-p1voPYe4.js";import"./InboxFill-UlBdMz1S.js";import"./MenuGrid-CbpowVch.js";import"./MagnifyingGlass-CTxcpUID.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-VujtsAHe.js";import"./Trash-E83sjO2G.js";import"./useLayout-BUWRF_Kr.js";import"./useLocale-cI1FQhuq.js";import"./header-CXffDktb.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BVHVYpiB.js";import"./BookmarkSettingsItem-Do-QoVZh.js";import"./QueryLabel-7J6HrgVy.js";import"./Plus-CVzkbDMT.js";import"./SettingsItemBase-BMpCw6WZ.js";import"./ItemMedia-6pV5l8vT.js";import"./Avatar-D6PHcyLs.js";import"./AvatarGroup-BkVQ_49o.js";import"./ChevronUp-Bz_NdsyW.js";import"./ChevronDown-CwSFKLVt.js";import"./ChevronRight-USTqc2u1.js";import"./ItemBase-DCtI5RfF.js";import"./ItemLink-DvbWzZwV.js";import"./ItemControls-uBubo23m.js";import"./Badge-DyKbmjLd.js";import"./Tooltip-DxZByRjV.js";import"./Typography-4TCMsL9d.js";import"./useHighlightedText-C02Ewits.js";import"./ContextMenu-D02kvEHP.js";import"./useDropdownMenuController-D_jzgNs_.js";import"./Dropdown-CX71Aqrg.js";import"./SearchField-GPsGdyh4.js";import"./MenuListItem-DfeXcHT9.js";import"./MenuListHeading-BypPBxNY.js";import"./MenuItem-BGB4ycnF.js";import"./Checkmark-HYeuFO73.js";import"./ItemLabel-DltkMrM4.js";import"./FieldBase-Ba-trh_u.js";import"./Field-C3XB-y4b.js";import"./Label-BuWFr_Nf.js";import"./Input-mPEfjr4P.js";import"./MenuListDivider-C1mJKicD.js";import"./InformationSquare-YKe2AoWI.js";import"./MenuElipsisHorizontal-BQulQNdY.js";import"./Pencil-fAGHp4AW.js";import"./SkipLink-CbubRj_m.js";import"./CookieBanner-CbGrokyH.js";import"./Link-yhVjaZ8U.js";import"./Banner-DND1fBYB.js";import"./GlobalHeader-C1xyeVjl.js";import"./useIsDesktop-BUvzy5Tw.js";import"./GlobalAccountButton-DrQ2S6cJ.js";import"./Enter-CJQnKqa0.js";import"./GlobalMenuButton-DhRFdWpD.js";import"./MenuHamburger-CTz_AmqV.js";import"./AccountSelector-DcQ2IQJ1.js";import"./Switch-CokB6aYL.js";import"./AccountMenu-yMcU8t-x.js";import"./GlobalMenu-C9Ky5rIY.js";import"./ArrowUndo-DkISv7pM.js";import"./Globe-B65d8Gq3.js";import"./BreadcrumbsLink-BsktVsbb.js";import"./ArrowRight-DaI-IGDJ.js";import"./Footer-CiLaHqZO.js";import"./Flex-OuhsGVSH.js";import"./ButtonGroup-DaIoZCPY.js";import"./ButtonGroupDivider-kCQDydAf.js";import"./ChevronUpDown--WwyvowO.js";import"./ToolbarMenu-aSovORQt.js";import"./ToolbarSearch-7Szf4uiX.js";import"./SettingsModal-CxFafKkC.js";import"./ModalBody-DIhMkcvy.js";import"./Section-4shCViQn.js";import"./ButtonIcon-BqERaHvl.js";import"./ButtonLabel-B39oCvE4.js";import"./TextField-CMUYKHRm.js";import"./inboxMenu-U9HByFFe.js";const he={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
