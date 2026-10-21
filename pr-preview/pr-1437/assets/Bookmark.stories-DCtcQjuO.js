var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-BXiLaIo1.js";import{u as j}from"./useProfileLayout-DKPnKB1A.js";import{u as g,B as k}from"./useBookmarks-BUrBK-IV.js";import{L as x}from"./Layout-sOVL6IGc.js";import{P as b}from"./PageBase-D8nE0_87.js";import{H as n}from"./Heading-BSdWQg6G.js";import{T as I}from"./Toolbar-107oglly.js";import{B as h}from"./BookmarkModal-BHuFdXj_.js";import{u as C}from"./useInboxLayout-Bi07G5ly.js";import{u as y}from"./useAccountMenu-C60sBAfZ.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BUipg3Mm.js";import"./Bell-DXgtntaP.js";import"./Bookmark-CN1VlO3k.js";import"./ClockDashed-BJCK-tSb.js";import"./globalMenu-BtVnvygK.js";import"./PersonCircle-D8lBn4f1.js";import"./Buildings2-c1bYMzyG.js";import"./InboxFill-DyNGkloF.js";import"./MenuGrid-CF6xrjMa.js";import"./MagnifyingGlass-c64YmjJ0.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-fOl5cdAJ.js";import"./Trash-B6SMwBsT.js";import"./useLayout-B6XBcDb6.js";import"./useLocale-D1mjdvqE.js";import"./header-DBqZfC7U.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CtVMoXgj.js";import"./BookmarkSettingsItem-Ca2oejRW.js";import"./QueryLabel-CBNrAuYb.js";import"./Plus-CrLkghCi.js";import"./SettingsItemBase-oEYueedx.js";import"./ItemMedia-VY1kKFwh.js";import"./Avatar-C8Pz6Y-5.js";import"./AvatarGroup-DEeDgfDf.js";import"./ChevronUp-yA5Flpqo.js";import"./ChevronDown-DR7pfG2a.js";import"./ChevronRight-CsaEnGk6.js";import"./ItemBase-vbQ8A6x6.js";import"./ItemLink-DethJfu5.js";import"./ItemControls-DC8itQ-R.js";import"./Badge-Dv1wWeY2.js";import"./Tooltip-Cd6x2nLz.js";import"./Typography-DfF7AP8y.js";import"./useHighlightedText-K6CHyIcM.js";import"./ContextMenu-D2k96V01.js";import"./useDropdownMenuController-CL8Sjosp.js";import"./Dropdown-By03aGa-.js";import"./SearchField-CdRvOe5p.js";import"./FieldBase-jDY5NJAX.js";import"./Field-B6gapKpe.js";import"./Label-CW_mCZHf.js";import"./Input-BQGhDE8-.js";import"./MenuListItem-DfRmTFq2.js";import"./MenuListDivider-BxB7qLGS.js";import"./MenuListHeading-HYCXR4_8.js";import"./MenuItem-B-mwma_U.js";import"./Checkmark-V6stw9rv.js";import"./ItemLabel-CTUta9rO.js";import"./InformationSquare-BMwsKYTB.js";import"./MenuElipsisHorizontal-CQ64RhHl.js";import"./Pencil-CpAbauY9.js";import"./SkipLink-DaC0LeIO.js";import"./CookieBanner-B4iTVKqj.js";import"./Link-XYoTrfy1.js";import"./Banner-X2XN2Q0_.js";import"./GlobalHeader-DAAk2KFu.js";import"./useIsDesktop-CGJs0Kta.js";import"./GlobalAccountButton-ccJJusFF.js";import"./Enter-sU-4-Yk9.js";import"./GlobalMenuButton-BzcX9jV2.js";import"./MenuHamburger-B9U3aeuO.js";import"./AccountSelector-BV3kbG0K.js";import"./Switch-Bnjvc7E2.js";import"./AccountMenu-Bv0t82Mk.js";import"./GlobalMenu-CNUQKa8k.js";import"./ArrowUndo-DN0pdREV.js";import"./Globe-CHDFv98W.js";import"./BreadcrumbsLink-DAFn3i82.js";import"./ArrowRight-C1Cbh0Eb.js";import"./Footer-B5K3QluN.js";import"./Flex-BVJPbTQ_.js";import"./ButtonGroup-z8aQXTJr.js";import"./ButtonGroupDivider-BGKQemmv.js";import"./ChevronUpDown-DV6_CqHG.js";import"./ToolbarMenu-DIllebBh.js";import"./ToolbarSearch-TBH6jXP9.js";import"./SettingsModal-C9wR8a3u.js";import"./ModalBody-BqZQ8xjv.js";import"./Section-SFy5BcqJ.js";import"./ButtonIcon-ChRdPhqI.js";import"./ButtonLabel-D7cBpyjL.js";import"./TextField-BHvjvFbO.js";import"./inboxMenu-DHROqorj.js";const he={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
