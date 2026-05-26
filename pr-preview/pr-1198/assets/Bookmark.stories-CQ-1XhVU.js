import{j as o}from"./iframe-YdRL1NzV.js";import{u as h}from"./useInboxLayout-CisETbyD.js";import{u as j}from"./useAccountMenu-zHaDwVov.js";import{u as c,B as g}from"./useBookmarks-B4U93SgS.js";import{L as k}from"./Layout-Iag71sqT.js";import{P as x}from"./PageBase-BzBPKY6S.js";import{H as p}from"./Heading-56B0sdRG.js";import{T as b}from"./Toolbar-BxpSoMXr.js";import{B as I}from"./BookmarkModal-uioo9agG.js";import{u as S}from"./useProfileLayout-DiXdeyYL.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-8a-2ZqFp.js";import"./InboxFill-Dhs0ejSb.js";import"./useId-DxHKrSZ4.js";import"./Plus-BNGbhyZ6.js";import"./PersonCircle-BIq4InXd.js";import"./Bookmark-COWjnrxW.js";import"./Archive-C1GJOqq_.js";import"./Trash-Bas2iEP8.js";import"./InformationSquare-C3wG0Qjz.js";import"./globalMenu-Cqcpsk_z.js";import"./Buildings2-Bu8VfWPO.js";import"./MenuGrid-TIfk-A40.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-CGk_uRcX.js";import"./useLocale-fq-ByQjj.js";import"./header-DiEwdwJQ.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-xZwyoFnY.js";import"./Button-BwQOxknK.js";import"./tooltip-D0NJwlFT.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-Dzr2GNwi.js";import"./QueryLabel-BLfanfjW.js";import"./SettingsItemBase-Ncp9urLT.js";import"./ChevronUp-DpeVWcyB.js";import"./ChevronDown-Uy2Tl2KH.js";import"./ChevronRight-DrXpgbb_.js";import"./ItemLink-sUnd8Dq1.js";import"./index-SoIsie1y.js";import"./ItemMedia-BNRd-cb6.js";import"./XMark-1l7ZvP46.js";import"./Avatar-02T2Z9c_.js";import"./Skeleton-C3i9Ug5T.js";import"./AvatarGroup-B9OCrS5P.js";import"./Icon-B4-srULI.js";import"./ItemControls-CMhfwURs.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./Typography-CYgzLoEf.js";import"./useHighlightedText-DI-ykGTt.js";import"./ContextMenu-BsQBLQnd.js";import"./useDropdownMenuController-CSEBkRU7.js";import"./Dropdown-CFQlkMFa.js";import"./MenuElipsisHorizontal-D5EdTq6X.js";import"./SearchField-Cp2PZLrm.js";import"./FieldBase-KNsWphki.js";import"./Label-CoBwam8t.js";import"./Input-Co3wY2OB.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuListHeading-DregQKpB.js";import"./MenuItem-DdZPav2y.js";import"./Checkmark-Ple-kG_b.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";import"./Pencil-DEU5Dtos.js";import"./SkipLink-D0iiulSE.js";import"./Banner-tOIBFdrS.js";import"./GlobalHeader-PQkGriiL.js";import"./useIsDesktop-DNaKtoN_.js";import"./GlobalAccountButton-DVQpzDNl.js";import"./Enter-BrhwR_zU.js";import"./GlobalMenuButton-C4kt-Hl6.js";import"./MenuHamburger-B0s_IErD.js";import"./AccountSelector-CBZe8-wp.js";import"./AccountMenu-GRew5JA2.js";import"./Switch-D1PNyCrc.js";import"./GlobalMenu-qKqkr7qf.js";import"./ArrowUndo-DdxLKHJA.js";import"./Globe-Bkro2Ij1.js";import"./BreadcrumbsLink-D1bNirUt.js";import"./ArrowRight-BXATOlQ9.js";import"./Footer-D46-qINA.js";import"./Flex-8MCCOfGV.js";import"./ChevronUpDown-DRTYtEui.js";import"./ButtonGroup-BTJ07o1P.js";import"./ButtonGroupDivider-Ccm8qlnp.js";import"./ToolbarMenu-4mCcshj8.js";import"./ToolbarSearch-BOpnVKBp.js";import"./SettingsModal-CSoyY2cF.js";import"./ModalBody-CTEW1e2E.js";import"./Section-Bmd_KobT.js";import"./ButtonIcon-c6Xu1QVp.js";import"./ButtonLabel-DtM2G-uP.js";import"./TextField-BcGNRTBS.js";import"./Bell-CeAGXi_W.js";import"./ClockDashed-C354w78W.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
