var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-DdPcKG0O.js";import{u as j}from"./useProfileLayout-CULe7x0R.js";import{u as g,B as x}from"./useBookmarks-CkFd9k9Z.js";import{L as k}from"./Layout-abpSdaPk.js";import{P as b}from"./PageBase-BA0lD-EE.js";import{H as m}from"./Heading-BJje4zKM.js";import{T as I}from"./Toolbar-WAXFuVwu.js";import{B as h}from"./BookmarkModal-D02YA16P.js";import{u as C}from"./useInboxLayout-CE9wl8IA.js";import{u as y}from"./useAccountMenu-BPX8SLoq.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BIqdK5f8.js";import"./Bell-B_p1_Gag.js";import"./Bookmark-D4xtpkN-.js";import"./ClockDashed-BKb7SczD.js";import"./globalMenu-DImnYpf6.js";import"./PersonCircle-D31QT1Vw.js";import"./Buildings2-DptQBOZ0.js";import"./InboxFill-DNUdwCna.js";import"./MenuGrid-DWVFfKff.js";import"./MagnifyingGlass-DvG6YRWZ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Ru5RTNZx.js";import"./Trash-CS2QUAEY.js";import"./useLayout-pYUVznTo.js";import"./useLocale-C5aYDsSd.js";import"./header-Ce6970so.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B_zDT5uM.js";import"./BookmarkSettingsItem-BouIKIy2.js";import"./QueryLabel-DkMYvJ8o.js";import"./Plus-DSTjtDMb.js";import"./SettingsItemBase-BEidFSPz.js";import"./ItemMedia-BsdmKVrj.js";import"./Avatar-Dfz4UezB.js";import"./AvatarGroup-BtZlCnKI.js";import"./ChevronUp-DhLREmKD.js";import"./ChevronDown-Bg2scdYv.js";import"./ChevronRight-Cmdt4Cn7.js";import"./ItemBase-Dx89ucny.js";import"./ItemLink-DgNk0tuY.js";import"./ItemControls-Bf5MqGaN.js";import"./Badge-BzZwcsiz.js";import"./Tooltip-wlipxmMb.js";import"./Typography-D4dRQ14t.js";import"./useHighlightedText-BvQbOG8T.js";import"./ContextMenu-DTBMpttb.js";import"./useDropdownMenuController-C4DxR2qZ.js";import"./useIsDesktop-Db5oQl2d.js";import"./Dropdown-COjWQps0.js";import"./SearchField-DZAM9WJB.js";import"./commonTexts-CG1mkCQM.js";import"./MenuListItem-DT2WooyF.js";import"./MenuListDivider-Dinu7Rw4.js";import"./MenuItem-BOFr4MJg.js";import"./CheckboxUncheckedIcon-BsqpIyxr.js";import"./RadioUncheckedIcon-DgOrjSnU.js";import"./ItemLabel-vi7acRQa.js";import"./FieldBase-V879Q4R4.js";import"./Field-DKeS0ieC.js";import"./Label-BJbtrgL_.js";import"./Input-RBXxlYal.js";import"./InformationSquare-RfPtjfhK.js";import"./Pencil-D505gK5y.js";import"./SkipLink-XB2ueEYu.js";import"./CookieBanner-DqZLgQb-.js";import"./Link-BOlpc0iE.js";import"./Banner-CZ375lTk.js";import"./GlobalHeader-AGgSr_4d.js";import"./GlobalAccountButton-YjQ0C6XK.js";import"./Enter-HqcRumc5.js";import"./GlobalMenuButton-sxX9OeGz.js";import"./MenuHamburger-D6OlWMiZ.js";import"./AccountSelector-D-sw94Xn.js";import"./Switch-GG9A6A0W.js";import"./AccountMenu-B95Q69sF.js";import"./GlobalMenu-JRG16Ahg.js";import"./Checkmark-CRn1GEhZ.js";import"./ArrowUndo-Bxuz6WKg.js";import"./Globe-BDvt3sjf.js";import"./BreadcrumbsLink-DBNxqeKE.js";import"./ArrowRight-Dgw6wxdS.js";import"./Footer-rqwLtXl1.js";import"./Flex-Cxkl80LA.js";import"./ButtonGroup-7J0PZlIk.js";import"./ButtonGroupDivider-LYfK3ofr.js";import"./ChevronUpDown-BnhMaCJz.js";import"./ToolbarMenu-QyugjYIs.js";import"./ToolbarSearch-BFIgyWsS.js";import"./SettingsModal-CIV3DCAg.js";import"./ModalBody-ClEfishX.js";import"./Section-C3SZ48VL.js";import"./ButtonLabel-Dt_XRmzl.js";import"./TextField-oWVFtQ_r.js";import"./inboxMenu-Cez6SIRl.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
