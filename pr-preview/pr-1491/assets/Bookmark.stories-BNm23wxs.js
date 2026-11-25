var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-Df5nkPs8.js";import{u as j}from"./useProfileLayout-zNgM5aER.js";import{u as g,B as x}from"./useBookmarks-C8uut4EF.js";import{L as k}from"./Layout-CTPgBLff.js";import{P as b}from"./PageBase-r-jI-k2I.js";import{H as m}from"./Heading-CPiHedua.js";import{T as I}from"./Toolbar-DCmKrXGS.js";import{B as h}from"./BookmarkModal-SoFf1aUw.js";import{u as C}from"./useInboxLayout-esTU9kiE.js";import{u as y}from"./useAccountMenu-wWVmh8ME.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DT4iXLuo.js";import"./Bell-CssGG3Qs.js";import"./Bookmark-DD9Ln-TJ.js";import"./ClockDashed-ChwTcSEw.js";import"./localeSwitcher-ChhKg0Ck.js";import"./InboxFill-BWNa2-zj.js";import"./PersonGroup--rYaGh6g.js";import"./MenuGrid-jjE0xEq3.js";import"./MagnifyingGlass-3vGCvjJD.js";import"./Buildings2-Byf-KbZl.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BEIKmTLh.js";import"./Trash-_1KE3-4v.js";import"./useLayout-DcMH42AZ.js";import"./useLocale-DHkbaZMt.js";import"./header-BAWJKgIQ.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-gk-Zv7NC.js";import"./BookmarkSettingsItem-BWqVFHWd.js";import"./QueryLabel-CgkP5LJd.js";import"./Plus-BaDdjZ6L.js";import"./SettingsItemBase-uT7-LXU1.js";import"./ItemMedia-B1kmhXWg.js";import"./Avatar-CUeqTW6a.js";import"./AvatarGroup-CtyhIC1k.js";import"./ChevronUp-Bz4Vcv4a.js";import"./ChevronDown-DdFcAhZa.js";import"./ChevronRight-DJP358BJ.js";import"./ItemBase-DPSoNf_4.js";import"./ItemLink-0qGvw1wz.js";import"./ItemControls-Bd_Lnueh.js";import"./Badge-m24uQYgz.js";import"./Tooltip-KOhXDwFj.js";import"./Typography-W78b6WhV.js";import"./useHighlightedText-BM0MIdsX.js";import"./ContextMenu-IodN0B0m.js";import"./useDropdownMenuController-DC3QZLRb.js";import"./Dropdown-DRbHVqgW.js";import"./SearchField-C0Yxe_69.js";import"./MenuListItem-C4bbk3e4.js";import"./MenuListDivider-BMCtCld-.js";import"./MenuItem-9AmdLb1n.js";import"./CheckboxUncheckedIcon-DFwabWeH.js";import"./RadioUncheckedIcon-CNGez86b.js";import"./ItemLabel-DuyLbrJx.js";import"./FieldBase-C4nTzDS1.js";import"./Field-DfhUv83u.js";import"./Label-D4wdB9xq.js";import"./Input-B9TaRlMe.js";import"./InformationSquare-CXwkU926.js";import"./Pencil-DY9hAmbZ.js";import"./SkipLink-BctJCkx5.js";import"./CookieBanner-DBfwuf8y.js";import"./Link-CjVBNz8b.js";import"./Banner-BHR8TN-K.js";import"./GlobalHeader-TYmVKmYX.js";import"./useIsDesktop-CZKmsf4c.js";import"./GlobalAccountButton-CP5a2BWr.js";import"./Enter-n45wvjgT.js";import"./GlobalMenuButton-Dpi4a_VH.js";import"./MenuHamburger-BHNimgxZ.js";import"./AccountSelector--eNdOJ7G.js";import"./Switch-BKc4sxE1.js";import"./AccountMenu-BF2GwXJ0.js";import"./GlobalMenu-BQTKpuvH.js";import"./Checkmark-DZ-Lmkux.js";import"./ArrowUndo-BBF4w0in.js";import"./Globe-CJX2uVTf.js";import"./BreadcrumbsLink-C2L4Ui-h.js";import"./ArrowRight-DrBNAp4X.js";import"./Footer-BOc2nD-C.js";import"./Flex-CYtO0dFj.js";import"./ButtonGroup-C09nr3gY.js";import"./ButtonGroupDivider-DI05vaV_.js";import"./ChevronUpDown-BtgQLPpc.js";import"./ToolbarMenu-COF1T52x.js";import"./ToolbarSearch-CYkSODkX.js";import"./SettingsModal-TGLT5mRb.js";import"./ModalBody-ESjZKsjK.js";import"./Section-CNSG608H.js";import"./ButtonIcon-yAUUau4A.js";import"./ButtonLabel-DPkO8s9u.js";import"./TextField-DGYwlIlO.js";import"./inboxMenu-DG66RFS1.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
