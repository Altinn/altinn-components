import{j as o}from"./iframe-DXwGEFZf.js";import{u as h}from"./useInboxLayout-CdWREKe6.js";import{u as j}from"./useAccountMenu-DpWjJla9.js";import{u as c,B as g}from"./useBookmarks-C0Dg8Gdc.js";import{L as k}from"./Layout-dpikFLST.js";import{P as x}from"./PageBase-BAvWTUxX.js";import{H as p}from"./Heading-D1SypAUR.js";import{T as b}from"./Toolbar-BV3vLwx2.js";import{B as I}from"./BookmarkModal-NDKl0Crt.js";import{u as S}from"./useProfileLayout-35R5pkTh.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-BNqGjbF0.js";import"./InboxFill-DWpspjSw.js";import"./useId-Df52yuGg.js";import"./Plus-6DEjvg57.js";import"./PersonCircle-bHcvGsix.js";import"./Bookmark-CfJzu2yo.js";import"./Archive-BSZ1HBnn.js";import"./Trash-Bhi8vMFl.js";import"./InformationSquare-CathhXXw.js";import"./globalMenu-DlnfHF8i.js";import"./Buildings2-QgXuVD1-.js";import"./MenuGrid-C5oGKC5O.js";import"./MagnifyingGlass-CllD3bzP.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-DHnY1JMV.js";import"./useLocale-iT2UdDxz.js";import"./header-iho8g4ib.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-Bx48nAIh.js";import"./Button-BcOfKjgE.js";import"./tooltip-OQNLf2nv.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-g85aWTYI.js";import"./QueryLabel-CpHrmLeu.js";import"./SettingsItemBase-DH0-F2ub.js";import"./ChevronUp-CJwhEbs5.js";import"./ChevronDown-Cc2tQRQQ.js";import"./ChevronRight-B7NrC3Rp.js";import"./ItemLink-BttCTuhw.js";import"./index-DpQTH4Pc.js";import"./ItemMedia-C0bSIjdI.js";import"./XMark-BspkucHC.js";import"./Avatar-OxvpOCq4.js";import"./Skeleton-CD7VUCi3.js";import"./AvatarGroup-vB7eodsE.js";import"./Icon-DEVqj2eM.js";import"./ItemControls-DXxKFox6.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./Typography-CegVoZkA.js";import"./useHighlightedText-NV3gg9HW.js";import"./ContextMenu-9EBdvE_8.js";import"./useDropdownMenuController-3S7tUMR-.js";import"./Dropdown-BZOF64eO.js";import"./MenuElipsisHorizontal-lS07k2bO.js";import"./SearchField-BCjbtpiQ.js";import"./FieldBase-BwCMZAv_.js";import"./Label-ChoE5xRO.js";import"./Input-CjRvyA41.js";import"./MenuListItem-BMkFPPC3.js";import"./MenuListHeading-G6YR-18r.js";import"./MenuItem-COBQQf6N.js";import"./Checkmark-DpC6lRZL.js";import"./useMenu-DnVZQPIX.js";import"./index-BmZUBcCg.js";import"./Pencil-BXGESWIH.js";import"./SkipLink-5RaXEbt6.js";import"./Banner-CmjuEN-t.js";import"./GlobalHeader-BZWdeDsN.js";import"./useIsDesktop-DryvnYFP.js";import"./GlobalAccountButton-CzYHDvba.js";import"./Enter-ChEXP26q.js";import"./GlobalMenuButton-DtcMXKiU.js";import"./MenuHamburger-DYibhKnt.js";import"./AccountSelector-CQ_7NSi-.js";import"./AccountMenu-9MAQjkAM.js";import"./Switch-BjC1I4Sd.js";import"./GlobalMenu-Ce9_HjH6.js";import"./ArrowUndo-BcOnJrBl.js";import"./Globe-omLHimzm.js";import"./BreadcrumbsLink-DRHJSkrR.js";import"./ArrowRight-NS2W46Jl.js";import"./Footer-DPYpLt8b.js";import"./Flex-U6liI5ZR.js";import"./ChevronUpDown-DoaPnXHw.js";import"./ButtonGroup-BgmjkJuw.js";import"./ButtonGroupDivider-Cg8WMtdf.js";import"./ToolbarMenu-DYrFr0_m.js";import"./ToolbarSearch-DigZ9geU.js";import"./SettingsModal-W0duOVpO.js";import"./ModalBody-v2jc6j_q.js";import"./Section-BSKZ_Frt.js";import"./ButtonIcon-DRE8-f_V.js";import"./ButtonLabel-pSIef_EU.js";import"./TextField-DxbXRgx4.js";import"./Bell-2m2JrCjb.js";import"./ClockDashed-DPDdHUks.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const he=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,he as __namedExportsOrder,Ie as default};
