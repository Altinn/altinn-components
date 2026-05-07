import{j as o}from"./iframe-Cqj3AiBb.js";import{u as h}from"./useInboxLayout-cKRu3mqi.js";import{u as j}from"./useAccountMenu-BNVwIEiq.js";import{u as c,B as g}from"./useBookmarks-CntO6FnE.js";import{L as k}from"./Layout-f91yRgSY.js";import{P as x}from"./PageBase-D_2wcYMv.js";import{H as p}from"./Heading-CJiOkJPI.js";import{T as b}from"./Toolbar-C1AG3cCG.js";import{B as I}from"./BookmarkModal-BENMAtxw.js";import{u as S}from"./useProfileLayout-DE5ExXvn.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-CETi0rDU.js";import"./InboxFill-B-I70TLd.js";import"./useId-Bi-DL88I.js";import"./Plus-U9ILyx0n.js";import"./PersonCircle-sKNvHz4D.js";import"./Bookmark-ykz9HJCL.js";import"./Archive-Brm_9A3i.js";import"./Trash-B8H25DCw.js";import"./InformationSquare-DK31GEUT.js";import"./globalMenu-CsbiSy3A.js";import"./Buildings2-CW6Ln2Lr.js";import"./MenuGrid-Dnrx8ipH.js";import"./MagnifyingGlass-fMCV_alc.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-D5_pfhJQ.js";import"./useLocale-BwYOMWnF.js";import"./header-DyRk7f-v.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-DCHu72W2.js";import"./Button-DYwdzfZG.js";import"./button-CcZ_KMhQ.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-BloSIIBV.js";import"./QueryLabel-_2UOa2hv.js";import"./SettingsItemBase-B6HYWitJ.js";import"./ChevronUp-BaSPXXxx.js";import"./ChevronDown-g18mW4eX.js";import"./ChevronRight-CxmxTIkT.js";import"./ItemLink-Bkhdk8v_.js";import"./index-CHG1hv9Q.js";import"./ItemMedia-DihsrAKt.js";import"./XMark-ReENydG3.js";import"./Avatar-D1U6ps5a.js";import"./Skeleton-B33vAz-c.js";import"./AvatarGroup-CmMUwf3A.js";import"./Icon-CHi77IUK.js";import"./ItemControls-eJMUKPOH.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-CV-E4tqG.js";import"./useHighlightedText-Cyl54eZj.js";import"./ContextMenu-DvzTTWGt.js";import"./useDropdownMenuController-DF4yQiJ_.js";import"./Dropdown-Cx7yQmcU.js";import"./MenuElipsisHorizontal-DNpXF7Es.js";import"./SearchField-qenOIdRZ.js";import"./FieldBase-DDsWnoQi.js";import"./Label-URmODKr6.js";import"./index-BZqr7PxG.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuListHeading-CixMX2n6.js";import"./MenuItem-BHtFBHA3.js";import"./Checkmark-BFwQvgMU.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./Pencil-BW7gTPSy.js";import"./SkipLink-BdUDD80F.js";import"./Banner-BSSTB2OU.js";import"./GlobalHeader-1ZMARuNk.js";import"./useIsDesktop-BA5ox44l.js";import"./GlobalAccountButton-DzTdmx8c.js";import"./Enter-COG8qags.js";import"./GlobalMenuButton-CYW4jJbb.js";import"./MenuHamburger-Cowy_Pyv.js";import"./AccountSelector-K6AFxsIB.js";import"./heading-BCk6Lw7-.js";import"./AccountMenu-DDR4vCda.js";import"./Switch-Dd7wCyBA.js";import"./GlobalMenu-G61wL3ak.js";import"./ArrowUndo-zDsO2X_3.js";import"./Globe-DBjj0c59.js";import"./BreadcrumbsLink-DyfgdHtn.js";import"./ArrowRight-CtrtZlDi.js";import"./Footer-1w6vwepj.js";import"./Flex-DFnlILDc.js";import"./ChevronUpDown-DokNKEik.js";import"./ButtonGroup-HmC79Nv3.js";import"./ButtonGroupDivider-DRl2_qKh.js";import"./ToolbarMenu-CrdlAyWm.js";import"./ToolbarSearch-C6dAmVLU.js";import"./SettingsModal-B16xHKIZ.js";import"./ModalBody-jsg5kTGr.js";import"./Section-BsXiOSXS.js";import"./ButtonIcon-CRk-Fq7D.js";import"./ButtonLabel-BBQgFKVt.js";import"./TextField-CKQo9ppU.js";import"./Bell-BFrIV75G.js";import"./ClockDashed-2w90gDju.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const fe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,fe as __namedExportsOrder,Se as default};
