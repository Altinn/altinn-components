var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-Cf4UALw8.js";import{u as j}from"./useProfileLayout-CW9YzmuS.js";import{u as g,B as x}from"./useBookmarks-zU-RkRxo.js";import{L as k}from"./Layout-2Z_4kzXe.js";import{P as b}from"./PageBase-eBY4Pxiv.js";import{H as m}from"./Heading-B2LEqvTq.js";import{T as I}from"./Toolbar-D6KQC90D.js";import{B as h}from"./BookmarkModal-DZdQYYHs.js";import{u as C}from"./useInboxLayout-BOu8G2R9.js";import{u as y}from"./useAccountMenu-Df-Uf2IL.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-D9h2LAGd.js";import"./Bell-CC6emYwL.js";import"./Bookmark-C10mug1X.js";import"./ClockDashed-BLeXrSnX.js";import"./globalMenu-BIJOliht.js";import"./PersonCircle-BinjxBJZ.js";import"./Buildings2-C5pfq8or.js";import"./InboxFill-DaA5y8zL.js";import"./MenuGrid-Dn9gpcu9.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DbxYD9lF.js";import"./Trash-B_p5hHVd.js";import"./useLayout-JlqS5Fc2.js";import"./useLocale-BPjin0qe.js";import"./header-cyCh-hE6.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CfWidWjC.js";import"./BookmarkSettingsItem-CcNjhIWm.js";import"./QueryLabel-BAJfrwFL.js";import"./Plus-sEq00D2Y.js";import"./SettingsItemBase-zn0lCP7Y.js";import"./ItemMedia-BhGUpV92.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./ChevronUp-BKdDwASh.js";import"./ChevronDown-B_UJ6uJ_.js";import"./ChevronRight-DcM2grMN.js";import"./ItemBase-CxBRYBgT.js";import"./ItemLink-B3qiGYfX.js";import"./ItemControls-C74k2R8j.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./Typography-CsGx0b_o.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ContextMenu-DZnF37e0.js";import"./useDropdownMenuController-DWWF3mOW.js";import"./Dropdown-BbrYcScL.js";import"./SearchField-CpDf3EHS.js";import"./MenuListItem-btKh04Ui.js";import"./MenuListDivider-CFCegYqH.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemLabel-C9vfNdbz.js";import"./FieldBase-DSaLFDie.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";import"./InformationSquare-uRwoVJB-.js";import"./Pencil-01g24vDz.js";import"./SkipLink-CgCDDMsC.js";import"./CookieBanner-BQBopbaZ.js";import"./Link-ApESsW5M.js";import"./Banner-CE7cR7yb.js";import"./GlobalHeader-DtmiGd7W.js";import"./useIsDesktop-B8RqtL_d.js";import"./GlobalAccountButton-DxY6wyot.js";import"./Enter-KlBUq896.js";import"./GlobalMenuButton-W3knbd65.js";import"./MenuHamburger-DwSFJE3g.js";import"./AccountSelector-CSU8nWht.js";import"./Switch-DuCdX2cJ.js";import"./AccountMenu-Ba6_WV3b.js";import"./GlobalMenu-Y6Sa8-oh.js";import"./Checkmark-Dha_gRss.js";import"./ArrowUndo-ucfdJHsw.js";import"./Globe-C1KW9qlQ.js";import"./BreadcrumbsLink-zy9RVUNR.js";import"./ArrowRight-C3hJKAqP.js";import"./Footer-BL-GZqKp.js";import"./Flex-CiSMsFR7.js";import"./ButtonGroup-Cw0djEV1.js";import"./ButtonGroupDivider-rSZ8QcFs.js";import"./ChevronUpDown-CYoTR3YM.js";import"./ToolbarMenu-BtMtO618.js";import"./ToolbarSearch-BNcqwGAT.js";import"./SettingsModal-YzyxvoqZ.js";import"./ModalBody-D4pYrcnM.js";import"./Section-B-7b4QAp.js";import"./ButtonIcon-DQVaPbHm.js";import"./ButtonLabel-DhfYOY4K.js";import"./TextField-DiuOYn3x.js";import"./inboxMenu-C291m3-d.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
