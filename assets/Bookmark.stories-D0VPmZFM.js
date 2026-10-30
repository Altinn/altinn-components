var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a5 as o}from"./iframe-BEPBrhYh.js";import{u as j}from"./useProfileLayout-BM5479gM.js";import{u as g,B as k}from"./useBookmarks-anLu_hdx.js";import{L as x}from"./Layout-DCDXVfbM.js";import{P as b}from"./PageBase-zu9p7WUI.js";import{H as m}from"./Heading-BqUC1GBi.js";import{T as I}from"./Toolbar-BcD-eICg.js";import{B as h}from"./BookmarkModal-9q83jMUf.js";import{u as C}from"./useInboxLayout-Bbh71_K8.js";import{u as y}from"./useAccountMenu-pnfblXj7.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-C6llmCUX.js";import"./Bell-DdUOgGSC.js";import"./Bookmark-C2CIOINf.js";import"./ClockDashed-dNbajp4m.js";import"./globalMenu-qNfVydtB.js";import"./PersonCircle-C2xFq9dK.js";import"./Buildings2-BzaFL7GZ.js";import"./InboxFill-DYuRRpF0.js";import"./MenuGrid-B8jnjZA4.js";import"./MagnifyingGlass-l6jgUFkE.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-NlH1Z6Dm.js";import"./Trash-C1lJDto_.js";import"./useLayout-CnZ0UKoN.js";import"./useLocale-CW0JYoPc.js";import"./header-BeC-Xqh1.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B9HVKiow.js";import"./BookmarkSettingsItem-DDB39L0h.js";import"./QueryLabel-B4VYwWAl.js";import"./Plus-DAOB77qZ.js";import"./SettingsItemBase-DRG8OS7r.js";import"./ItemMedia-CYSGtJhU.js";import"./Avatar-qDEqb0bI.js";import"./AvatarGroup-Gy14OH0C.js";import"./ChevronUp-Bk9rr-UB.js";import"./ChevronDown-BSSTTv90.js";import"./ChevronRight-BrDrfe7a.js";import"./ItemBase-A6nm7hoq.js";import"./ItemLink-7n7ztO7T.js";import"./ItemControls-CZ-8cGPW.js";import"./Badge-BmPIjRDc.js";import"./Tooltip-DCBB34Fc.js";import"./Typography-_e1X1oy3.js";import"./useHighlightedText-DWAIm2UF.js";import"./ContextMenu-CekCrG_1.js";import"./useDropdownMenuController-DdlZblN1.js";import"./Dropdown-CldWVtsu.js";import"./SearchField-r0pyJJeA.js";import"./MenuListItem-2YHve_kq.js";import"./MenuListHeading-T5KLvVq-.js";import"./MenuItem-H_qy6f71.js";import"./Checkmark-QQMx0dPf.js";import"./ItemLabel-BAi-NqVp.js";import"./FieldBase-BC5T5LJl.js";import"./Field-DhJVWLwL.js";import"./Label-jwx91OTT.js";import"./Input-DvI4J5FV.js";import"./MenuListDivider-DmSDyTka.js";import"./InformationSquare-D8scBrIA.js";import"./MenuElipsisHorizontal-BM49I1I7.js";import"./Pencil-CdQx39Wx.js";import"./SkipLink-CkAz1fvp.js";import"./CookieBanner-Cl_qHuXI.js";import"./Link-BR4Ky0AC.js";import"./Banner-FQfjiqcM.js";import"./GlobalHeader-C6MfFN6C.js";import"./useIsDesktop-BW8ld6Da.js";import"./GlobalAccountButton-CV724ZOt.js";import"./Enter-eQD-eOZr.js";import"./GlobalMenuButton-BBIPux6p.js";import"./MenuHamburger-CXEb9Ato.js";import"./AccountSelector-DuBTmlxF.js";import"./Switch-kGpFVWzx.js";import"./AccountMenu-BFJ5YJHn.js";import"./GlobalMenu-CKxZKQb2.js";import"./ArrowUndo-Bn6ibvxZ.js";import"./Globe-IgiMzoZ3.js";import"./BreadcrumbsLink-C0C6OCT3.js";import"./ArrowRight-CdAaftPP.js";import"./Footer-DxQXXNlI.js";import"./Flex-x8IfBbMo.js";import"./ButtonGroup-7udc4H2h.js";import"./ButtonGroupDivider-Dp_aRRrw.js";import"./ChevronUpDown-6LOgRZDa.js";import"./ToolbarMenu-CAQJE6gQ.js";import"./ToolbarSearch-DYEg-7Ri.js";import"./SettingsModal-R8oYHUmp.js";import"./ModalBody-3_P61XP4.js";import"./Section-Dz1fz0TX.js";import"./ButtonIcon-RzrWxu6x.js";import"./ButtonLabel-BsY3dJmG.js";import"./TextField-DARZj023.js";import"./inboxMenu-CtWtNlRn.js";const he={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(k,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:n}),o.jsx(k,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
