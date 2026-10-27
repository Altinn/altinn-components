var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-CtXhLetY.js";import{u as j}from"./useProfileLayout-CbwwrMvH.js";import{u as g,B as k}from"./useBookmarks-KOYYpDKa.js";import{L as x}from"./Layout-MGdRDENj.js";import{P as b}from"./PageBase-z5wdJ2C_.js";import{H as n}from"./Heading-B7X6yBjX.js";import{T as I}from"./Toolbar-BBuaQHy6.js";import{B as h}from"./BookmarkModal-xNSJZ_PY.js";import{u as C}from"./useInboxLayout-nkmzYOYf.js";import{u as y}from"./useAccountMenu-B59uzU3d.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-5pldSrgK.js";import"./Bell-CsPCYoSW.js";import"./Bookmark-p1JpUjIW.js";import"./ClockDashed-Bf3NF91U.js";import"./globalMenu-Dt6QMX1G.js";import"./PersonCircle-CLS7h6Wm.js";import"./Buildings2-BjOuJBtN.js";import"./InboxFill-DKsacsb2.js";import"./MenuGrid-zpFxq1Os.js";import"./MagnifyingGlass-BW7UTF9K.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CMlmkXHW.js";import"./Trash-BBjuHv-u.js";import"./useLayout-Cg9YnljA.js";import"./useLocale-CrpBL4xa.js";import"./header-ECgVQ2z6.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BNTP8R_q.js";import"./BookmarkSettingsItem-BtAIX25X.js";import"./QueryLabel-CAwshzuA.js";import"./Plus-CaMrdVwa.js";import"./SettingsItemBase-DJ85t7zR.js";import"./ItemMedia-BiJdsWyj.js";import"./Avatar-C_nt_-qv.js";import"./AvatarGroup-BusGV1QQ.js";import"./ChevronUp-7x0YByos.js";import"./ChevronDown-ChgXhb0d.js";import"./ChevronRight-S5R-64jg.js";import"./ItemBase-DZnnQWR_.js";import"./ItemLink-DjxEH_jH.js";import"./ItemControls-HM0P9mXN.js";import"./Badge-CvkF3r0_.js";import"./Tooltip-CnrvYiqd.js";import"./Typography-BeyzbKvD.js";import"./useHighlightedText-CqB1D3Sj.js";import"./ContextMenu-prDkaT0d.js";import"./useDropdownMenuController-iiDYFfhV.js";import"./Dropdown-D7OO9hIV.js";import"./SearchField-DGLH3IXX.js";import"./MenuListItem-DIFzVMat.js";import"./MenuListHeading-6_KiCxEb.js";import"./MenuItem-Dg4o38tg.js";import"./Checkmark-Dh1g_xoQ.js";import"./ItemLabel-D2Lcyfj9.js";import"./FieldBase-CnqvqYs3.js";import"./Field-BtWy7god.js";import"./Label-Dko7GLwY.js";import"./Input-QpxxtH2z.js";import"./MenuListDivider-B0UBxccN.js";import"./InformationSquare-o37slIGL.js";import"./MenuElipsisHorizontal-Cc3YoMLz.js";import"./Pencil-C83C9SiU.js";import"./SkipLink-aKUarX7w.js";import"./CookieBanner-DAjzF8he.js";import"./Link-I9Yd2azp.js";import"./Banner-C8RGc_Vu.js";import"./GlobalHeader-D0IWotA8.js";import"./useIsDesktop-D8Kv6d5F.js";import"./GlobalAccountButton-VwHnMVoD.js";import"./Enter-CC4aa7RX.js";import"./GlobalMenuButton-BUdxG7sq.js";import"./MenuHamburger-ClUS-mp3.js";import"./AccountSelector-CBgCTQdO.js";import"./Switch-F7ErxPBD.js";import"./AccountMenu-DzcUfmvZ.js";import"./GlobalMenu-fucqRSZu.js";import"./ArrowUndo-z5PUo7n9.js";import"./Globe-CRscLQGE.js";import"./BreadcrumbsLink-CMSo1muQ.js";import"./ArrowRight-BEFYgB7Z.js";import"./Footer-BkTlZtZM.js";import"./Flex-B2jEbRqX.js";import"./ButtonGroup-BWN2lsHW.js";import"./ButtonGroupDivider-DY6cFDZa.js";import"./ChevronUpDown-dweat57-.js";import"./ToolbarMenu-BN4HJd0Y.js";import"./ToolbarSearch-BD6zThIa.js";import"./SettingsModal-C_c01Qjn.js";import"./ModalBody-Bv_B0VCd.js";import"./Section-BY6ZWS4H.js";import"./ButtonIcon-c1Jmgrga.js";import"./ButtonLabel-BHl8q492.js";import"./TextField-0YAEkQ2-.js";import"./inboxMenu-DZdcJNpN.js";const he={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
