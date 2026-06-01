import{a7 as o}from"./iframe-D3QbR5Le.js";import{u as S}from"./useProfileLayout-B030vzG-.js";import{u as c,B as g}from"./useBookmarks-z-ZJ6D-g.js";import{L as k}from"./Layout-98uq2Nbn.js";import{P as x}from"./PageBase-nQD8aYT6.js";import{H as p}from"./Heading-D807jdih.js";import{T as b}from"./Toolbar-C1DupJ55.js";import{B as I}from"./BookmarkModal-9-v_d_-2.js";import{u as h}from"./useInboxLayout-V10VWlnr.js";import{u as f}from"./useAccountMenu-CGBaYend.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-DcbyeYdF.js";import"./Bell-Rx9RluYe.js";import"./Bookmark-B7-hL0VH.js";import"./ClockDashed-DFvOJ2tV.js";import"./globalMenu-D3vwWk3G.js";import"./PersonCircle-DH8Tjd4S.js";import"./Buildings2-CAg99zbd.js";import"./InboxFill-D3jcRFuv.js";import"./MenuGrid-BBlfhuDg.js";import"./MagnifyingGlass-odaglt7B.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BPPn0ndA.js";import"./Trash-BkS8tkBS.js";import"./useLayout-BcGXXMRW.js";import"./useLocale-C1vAeR0e.js";import"./header-LdgVGyOM.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CKRyFifW.js";import"./BookmarkSettingsItem-BPixmuii.js";import"./QueryLabel-CW90pEyQ.js";import"./Plus-CH4rOE0f.js";import"./SettingsItemBase-Lt2ogKyw.js";import"./ItemMedia-By1N_mbL.js";import"./Avatar-0HMs51Xi.js";import"./AvatarGroup-BqAJnN7l.js";import"./ChevronUp-CTGCEiGM.js";import"./ChevronDown-B0RV9pqr.js";import"./ChevronRight-CW8WMRnL.js";import"./ItemBase-CEAJBqnC.js";import"./ItemLink-CZhIWltI.js";import"./ItemControls-UDFYeL-1.js";import"./Badge-D-6Sz0uL.js";import"./Tooltip-r3UZaGLO.js";import"./Typography-Dc0CQRXO.js";import"./useHighlightedText-Cs6VCP7b.js";import"./ContextMenu-DszTDAnz.js";import"./useDropdownMenuController-DUFIDFh-.js";import"./Dropdown-DfrU0yXs.js";import"./SearchField-C1oRwJ9X.js";import"./FieldBase-BVisqjo6.js";import"./Field-CmklkMP8.js";import"./Label-1ernyuR0.js";import"./Input-fbRgifOV.js";import"./MenuListItem-CIRSIckJ.js";import"./MenuListHeading-CUGWWC4c.js";import"./MenuItem-p2P7kMgy.js";import"./Checkmark-DPa9YJ2d.js";import"./ItemLabel-D38lX0bX.js";import"./index-1UUqftsp.js";import"./InformationSquare-B-kAc2gK.js";import"./MenuElipsisHorizontal-Tn2MvOgZ.js";import"./Pencil-BG4ZqV49.js";import"./SkipLink-BWk-WkdK.js";import"./Banner-Bm_QqOdx.js";import"./GlobalHeader-D1uyhSdI.js";import"./useIsDesktop-CIdvrOYU.js";import"./GlobalAccountButton-Bh_bdKG1.js";import"./Enter-DsDy1cdk.js";import"./GlobalMenuButton-Cc_W4ERZ.js";import"./MenuHamburger-LJWJnc75.js";import"./AccountSelector-BEMkPd7g.js";import"./Switch-BOPbfOkf.js";import"./AccountMenu-B24E_x6q.js";import"./GlobalMenu-BS9XoGzt.js";import"./ArrowUndo-K62ELgv2.js";import"./Globe-DRoKw-je.js";import"./BreadcrumbsLink-m0IJbbKb.js";import"./ArrowRight-DLgRKrIE.js";import"./Footer-Cvhx4ZNB.js";import"./Flex-Dql3tqb8.js";import"./ButtonGroup-BYb3YlMN.js";import"./ButtonGroupDivider-TW74zNhR.js";import"./ChevronUpDown-Djy0J9Oq.js";import"./ToolbarMenu-BTFX5aP6.js";import"./ToolbarSearch-pEOyeeVn.js";import"./SettingsModal-CeyZSZ--.js";import"./ModalBody-BwpzmVNb.js";import"./Section-C8MEyA5r.js";import"./ButtonIcon-Ye1m4QhY.js";import"./ButtonLabel-ChXqurd4.js";import"./TextField-BeFFvfBE.js";import"./inboxMenu-w6FzIS6S.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const ke=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,ke as __namedExportsOrder,ge as default};
