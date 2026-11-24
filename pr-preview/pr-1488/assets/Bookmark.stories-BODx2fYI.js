var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-Cb83cNHz.js";import{u as j}from"./useProfileLayout-BjFE2YNL.js";import{u as g,B as x}from"./useBookmarks-krScsx_D.js";import{L as k}from"./Layout-Dff3kFcF.js";import{P as b}from"./PageBase-SjhsrAEt.js";import{H as m}from"./Heading-I2bz7uBQ.js";import{T as I}from"./Toolbar-B_gii49B.js";import{B as h}from"./BookmarkModal-CMop6QZU.js";import{u as C}from"./useInboxLayout-D4BV_LC7.js";import{u as y}from"./useAccountMenu-BH3K6i1e.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DcdlCvlf.js";import"./Bell-BY_iRMvG.js";import"./Bookmark-CQ14dnwq.js";import"./ClockDashed-CdLFcCzb.js";import"./globalMenu-C_b1A6tx.js";import"./PersonCircle-CtGRXr0J.js";import"./Buildings2-CMW_rwWI.js";import"./InboxFill-C-qRYzn8.js";import"./MenuGrid-BEQ62scm.js";import"./MagnifyingGlass-C02McN1l.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DAtzml59.js";import"./Trash-lsGNewil.js";import"./useLayout-ChotBEY2.js";import"./useLocale-B81XpxB2.js";import"./header-BCF_3qUB.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D3abljbA.js";import"./BookmarkSettingsItem-C1rErcVf.js";import"./QueryLabel-D2zi5nK2.js";import"./Plus-DTEoGbp7.js";import"./SettingsItemBase-Cp8OCg29.js";import"./ItemMedia-DqOX_qxk.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./ChevronUp-BCG2x0JT.js";import"./ChevronDown-CvYcy6of.js";import"./ChevronRight-C-6CVVq7.js";import"./ItemBase-kQ84sUK4.js";import"./ItemLink-BQ17I7eJ.js";import"./ItemControls-B2ksNOht.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./Typography-BPADIB9F.js";import"./useHighlightedText-DXF5vSCe.js";import"./ContextMenu-BmqCqerS.js";import"./useDropdownMenuController-Q85VC5Dx.js";import"./Dropdown-ANdQRx3c.js";import"./SearchField-HWu0obAx.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuListDivider-CU0QYw1K.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemLabel-BEqC8Tjb.js";import"./FieldBase-DBBKjPwf.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./Input-DdatSh7d.js";import"./InformationSquare-BiO92rri.js";import"./Pencil-BT4WtC0b.js";import"./SkipLink-6B7b5F_a.js";import"./CookieBanner-jCRU0d03.js";import"./Link-DQQdOR66.js";import"./Banner-B1D4lRTG.js";import"./GlobalHeader-GY_0unjy.js";import"./useIsDesktop-bkDzo4_p.js";import"./GlobalAccountButton-YJVub4dC.js";import"./Enter-242fxigb.js";import"./GlobalMenuButton-Dr02kXNp.js";import"./MenuHamburger-CnSpXwtX.js";import"./AccountSelector-C0DI3fm4.js";import"./Switch-DIW_Z6WH.js";import"./AccountMenu-DZR0MJzN.js";import"./GlobalMenu-BMN2Sqk4.js";import"./Checkmark-CNvtSrOy.js";import"./ArrowUndo-B-nYNH6F.js";import"./Globe-DtcnCepT.js";import"./BreadcrumbsLink--x-4fvlt.js";import"./ArrowRight-CQNswdhZ.js";import"./Footer-CT_cgCIN.js";import"./Flex-mAUGJKsG.js";import"./ButtonGroup-BwzWu-pA.js";import"./ButtonGroupDivider-C8hWvas3.js";import"./ChevronUpDown-BJhYzIIl.js";import"./ToolbarMenu-C-UhfqZn.js";import"./ToolbarSearch-z6Bkm9UK.js";import"./SettingsModal-BNJ4T6iX.js";import"./ModalBody-CL-S6xSQ.js";import"./Section-ClBUDaq7.js";import"./ButtonIcon-B4Ur9LKF.js";import"./ButtonLabel-DO3-EdGM.js";import"./TextField-Cld7v0hg.js";import"./inboxMenu-BCVIvCMO.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
