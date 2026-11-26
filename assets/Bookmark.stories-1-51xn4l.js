var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-Dhr5kNpI.js";import{u as j}from"./useProfileLayout-BiYg4zdg.js";import{u as g,B as x}from"./useBookmarks-DXJpFpxC.js";import{L as k}from"./Layout-b9_DASgO.js";import{P as b}from"./PageBase-Bube1PFK.js";import{H as m}from"./Heading-DmbuxGS8.js";import{T as I}from"./Toolbar-DHeeC9bw.js";import{B as h}from"./BookmarkModal-20LDTjZH.js";import{u as C}from"./useInboxLayout-C4bQrm5G.js";import{u as y}from"./useAccountMenu-BhDYNqzc.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-C2b-lyNp.js";import"./Bell-CTnba2Qj.js";import"./Bookmark-Dnx7CoLa.js";import"./ClockDashed-CsZP5RVc.js";import"./globalMenu-YsQW083g.js";import"./PersonCircle-D7PND_VY.js";import"./Buildings2-Zdf-PMQF.js";import"./InboxFill-BQn04Vnh.js";import"./MenuGrid-Dtc87Yds.js";import"./MagnifyingGlass-qp743Sh-.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CSWjZQYI.js";import"./Trash-DlyJC_yu.js";import"./useLayout-zxKW-DRf.js";import"./useLocale-DmgTjWPu.js";import"./header-DsG7eok5.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BGMvW90K.js";import"./BookmarkSettingsItem-a7e5MxCO.js";import"./QueryLabel-CkViHas5.js";import"./Plus-CJyVTS1m.js";import"./SettingsItemBase-BD2Mivhr.js";import"./ItemMedia-C0ReNhrI.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./ChevronUp-CnX9Oj5-.js";import"./ChevronDown-CRBE2Pft.js";import"./ChevronRight-BnrL2uT7.js";import"./ItemBase-YnVoDumG.js";import"./ItemLink-r00OWv-Y.js";import"./ItemControls-CiyO-qr-.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./Typography-CiPthQfi.js";import"./useHighlightedText-D3bt4yNA.js";import"./ContextMenu-BSYfi7oi.js";import"./useDropdownMenuController-CYf_FFxY.js";import"./Dropdown-CYaHmHFx.js";import"./SearchField-Daiwk--y.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuListDivider-BDnQXOa-.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemLabel-D7TXcLH5.js";import"./FieldBase-C_75hFZi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";import"./InformationSquare-B4yRDNra.js";import"./Pencil-pzOsxDSV.js";import"./SkipLink-D4aRwPBT.js";import"./CookieBanner-BYmyroC1.js";import"./Link-BcpX_Jbu.js";import"./Banner-B75RCubj.js";import"./GlobalHeader-HRR1BEKf.js";import"./useIsDesktop-9sPcRqaI.js";import"./GlobalAccountButton-CA2fQ84T.js";import"./Enter-B8y0P7tB.js";import"./GlobalMenuButton-CnciQBA6.js";import"./MenuHamburger-CsHjEoZC.js";import"./AccountSelector-Bgw129to.js";import"./Switch-DrTa1vix.js";import"./AccountMenu-BrVN1SqG.js";import"./GlobalMenu-CrWIFlwZ.js";import"./Checkmark-Dq0lqnYy.js";import"./ArrowUndo-Cco96Qbs.js";import"./Globe-CB-uD3-X.js";import"./BreadcrumbsLink-D3ZvT99q.js";import"./ArrowRight-CNFtkaIJ.js";import"./Footer-y517Vrur.js";import"./Flex-CQB0dbJh.js";import"./ButtonGroup-DjJP_8QL.js";import"./ButtonGroupDivider-xXSQP4fw.js";import"./ChevronUpDown-ClFjd4Wf.js";import"./ToolbarMenu-4nusd3Gy.js";import"./ToolbarSearch-Cs9or_Ii.js";import"./SettingsModal-Ch2wktR-.js";import"./ModalBody-bj2s7Dy2.js";import"./Section-xZgyq4QZ.js";import"./ButtonIcon-3_G48aTa.js";import"./ButtonLabel-Dyo1xgTN.js";import"./TextField-BRsrf4PY.js";import"./inboxMenu-YMfldJTG.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
