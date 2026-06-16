import{a7 as o}from"./iframe-5uZaoZDv.js";import{u as S}from"./useProfileLayout-DvrOLKWP.js";import{u as c,B as g}from"./useBookmarks-BI_BpPUP.js";import{L as k}from"./Layout-YlJjt3Zp.js";import{P as x}from"./PageBase-C86xlquB.js";import{H as p}from"./Heading-B0bYr3fv.js";import{T as b}from"./Toolbar-D8fcB4sB.js";import{B as I}from"./BookmarkModal-D_14--Md.js";import{u as h}from"./useInboxLayout-Bz7Xnnr7.js";import{u as f}from"./useAccountMenu-DrOsqRFd.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-DCGWXjh-.js";import"./Bell-D4BPzBqt.js";import"./Bookmark-iOzOj9GE.js";import"./ClockDashed-D9mjhE8V.js";import"./globalMenu-Brui9SgR.js";import"./PersonCircle-6TXghkEl.js";import"./Buildings2-BtgOIZ6h.js";import"./InboxFill-C1F-FBG0.js";import"./MenuGrid-7flgsfA5.js";import"./MagnifyingGlass-BhHVps8f.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-3ezaIRLA.js";import"./Trash-2WKaOU1P.js";import"./useLayout-TA_KuGRY.js";import"./useLocale-BsS1kP7L.js";import"./header-BM1CGIa-.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-ihj2gTIo.js";import"./BookmarkSettingsItem-BAZ-HzhF.js";import"./QueryLabel-soYM2iwT.js";import"./Plus-Niq-gKxO.js";import"./SettingsItemBase-B0BSn8ZL.js";import"./ItemMedia-CTN7-8P7.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./ChevronUp-DyiUf01B.js";import"./ChevronDown-WcynsFDk.js";import"./ChevronRight-Bm7ufgRx.js";import"./ItemBase-CNx3m5cy.js";import"./ItemLink-1JWfbyN9.js";import"./ItemControls-DqscoWhH.js";import"./Badge-CJMAUuOr.js";import"./Tooltip-BCm3h_Ql.js";import"./Typography-DIry-l26.js";import"./useHighlightedText-SumDRzv0.js";import"./ContextMenu-B6BhHYA_.js";import"./useDropdownMenuController-CpFfsyiJ.js";import"./Dropdown-CDWM3_3M.js";import"./SearchField-BHTg7ejP.js";import"./FieldBase-D-wimfjV.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./Input-C9_VoQpt.js";import"./MenuListItem-BbZ2xvN5.js";import"./MenuListDivider-BVxqYtLY.js";import"./MenuListHeading-gwVAdWe6.js";import"./MenuItem-CHpnlanL.js";import"./Checkmark-j8exHh37.js";import"./ItemLabel-DdCL01OT.js";import"./InformationSquare-DVWbDPiI.js";import"./MenuElipsisHorizontal-BtmouW_1.js";import"./Pencil-LLi1GE-R.js";import"./SkipLink-BxsFb5Og.js";import"./Banner-n9wWpLew.js";import"./GlobalHeader-K2Vvsrfp.js";import"./useIsDesktop-BtoJpQh7.js";import"./GlobalAccountButton-D3YkeWN6.js";import"./Enter-BLjcmL9e.js";import"./GlobalMenuButton-UDYXjn0g.js";import"./MenuHamburger-Dp4fYPBF.js";import"./AccountSelector-DRG0v8TS.js";import"./Switch-DtoW_28_.js";import"./AccountMenu-oPXEEHya.js";import"./GlobalMenu-CQ0cRHDw.js";import"./ArrowUndo-DYsQqSN_.js";import"./Globe-BFCa4mjd.js";import"./BreadcrumbsLink-fOI1FWh4.js";import"./ArrowRight-Ucu-Xew7.js";import"./Footer-Cr5jeopI.js";import"./Flex-n4FQi775.js";import"./ButtonGroup-BERBX_Ni.js";import"./ButtonGroupDivider-yV4mnRPl.js";import"./ChevronUpDown-BXCeQqi8.js";import"./ToolbarMenu-Bf5nbfad.js";import"./ToolbarSearch-B44hYZzR.js";import"./SettingsModal-BVzJVcba.js";import"./ModalBody-DNZy-Qrb.js";import"./Section-BAWmKTu0.js";import"./ButtonIcon-DCP33fL5.js";import"./ButtonLabel-BsxQmxna.js";import"./TextField-BmUy1KEc.js";import"./inboxMenu-GFmd34kw.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
