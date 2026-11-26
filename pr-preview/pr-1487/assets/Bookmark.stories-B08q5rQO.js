var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-DwHkmT0f.js";import{u as j}from"./useProfileLayout-Bthb7t_E.js";import{u as g,B as x}from"./useBookmarks-BmOFAMZJ.js";import{L as k}from"./Layout-BQsHSQbg.js";import{P as b}from"./PageBase-BdMUoj4R.js";import{H as m}from"./Heading-FTp623yO.js";import{T as I}from"./Toolbar-BF0fcXVK.js";import{B as h}from"./BookmarkModal-X-dy5m6Y.js";import{u as C}from"./useInboxLayout-C8rAMMhO.js";import{u as y}from"./useAccountMenu-DCIvS8dV.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-Dq4xiIhf.js";import"./Bell-CT4e3QFA.js";import"./Bookmark-D8UAaNDA.js";import"./ClockDashed-8pYFR5Pn.js";import"./globalMenu-C-LBw6U_.js";import"./PersonCircle-C4drci5H.js";import"./Buildings2-CFScrem9.js";import"./InboxFill-Cj7OiwCb.js";import"./MenuGrid-qtVH-PgJ.js";import"./MagnifyingGlass-BwHWlmqj.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DDASx2ii.js";import"./Trash-B4bAWeXV.js";import"./useLayout-BkQYZ5Su.js";import"./useLocale-DRENSImX.js";import"./header-DsGF-21g.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D8t-dYWs.js";import"./BookmarkSettingsItem-CQo-tjNr.js";import"./QueryLabel-BqXpqRm2.js";import"./Plus-Ridmc-ni.js";import"./SettingsItemBase-CKmbFkX3.js";import"./ItemMedia-CVGrPGLV.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./ChevronUp-CXBen__p.js";import"./ChevronDown-DRHOaSZs.js";import"./ChevronRight-B3vSh-CA.js";import"./ItemBase-Ck4UvHPX.js";import"./ItemLink-32-6kvwj.js";import"./ItemControls-CCH_CI8A.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./Typography-BKrXxvhH.js";import"./useHighlightedText-DRj0X6ck.js";import"./ContextMenu-CEbN3Pip.js";import"./useDropdownMenuController-CWhiY6a5.js";import"./Dropdown-C_Uvx9iV.js";import"./SearchField-BE9AHyrE.js";import"./MenuListItem-CtEoku_b.js";import"./MenuListDivider-CROwDY0z.js";import"./MenuItem-CZxJMuiO.js";import"./CheckboxUncheckedIcon-CVogy-dq.js";import"./RadioUncheckedIcon-DD-mj64d.js";import"./ItemLabel-hjkm06Ot.js";import"./FieldBase-CpcKIkx4.js";import"./Field-BDHCaXkr.js";import"./Label-B7Jjr_ur.js";import"./Input-D6xvIcky.js";import"./InformationSquare-CaoePqPY.js";import"./Pencil-By4gU6oQ.js";import"./SkipLink-BHSNcdDG.js";import"./CookieBanner-BNxN1y6b.js";import"./Link-CBokgU09.js";import"./Banner-Bf1wdY8O.js";import"./GlobalHeader-Bg7Xr32E.js";import"./useIsDesktop-bDdggvni.js";import"./GlobalAccountButton-BCPzrpzR.js";import"./Enter-DzGA_rgK.js";import"./GlobalMenuButton-siMtATqH.js";import"./MenuHamburger-Cqjxk-FQ.js";import"./AccountSelector-fntBMO38.js";import"./Switch-BbEJ57Wz.js";import"./AccountMenu-COjSW_5W.js";import"./GlobalMenu-CxMd4U83.js";import"./Checkmark-DmU4T3LZ.js";import"./ArrowUndo-COZnsPlQ.js";import"./Globe-Bx9qVXn3.js";import"./BreadcrumbsLink-uezuQMUt.js";import"./ArrowRight-PJmGhzt9.js";import"./Footer-Bz1uqfW8.js";import"./Flex-DUzkq__j.js";import"./ButtonGroup-DYVDsbWZ.js";import"./ButtonGroupDivider-nx6LDsuT.js";import"./ChevronUpDown-DfuKOSo-.js";import"./ToolbarMenu-BoysZjSy.js";import"./ToolbarSearch-CazkYMmT.js";import"./SettingsModal-CgPo0XsY.js";import"./ModalBody-DRCMelZn.js";import"./Section-BzvI0xQr.js";import"./ButtonIcon-BjFimnAA.js";import"./ButtonLabel-ByPzwwTy.js";import"./TextField-DuUrFaPE.js";import"./inboxMenu-zQ1cQpo4.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
