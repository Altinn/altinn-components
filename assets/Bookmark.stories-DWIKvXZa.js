import{j as o}from"./iframe-D-ID03Ik.js";import{u as h}from"./useInboxLayout-7jJ41YYv.js";import{u as j}from"./useAccountMenu-ew3FUgVL.js";import{u as c,B as g}from"./useBookmarks-Bw8fh10_.js";import{L as k}from"./Layout-DP4RRJlF.js";import{P as x}from"./PageBase-ConMZfn3.js";import{H as p}from"./Heading-BD0s_Obx.js";import{T as b}from"./Toolbar-D_32k6lF.js";import{B as I}from"./BookmarkModal-6k9KfcnO.js";import{u as S}from"./useProfileLayout-BVWAdQrw.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-8syOTRqq.js";import"./InboxFill-CtasZA9T.js";import"./useId-DxZoCrQU.js";import"./Plus-DTGwq1FZ.js";import"./PersonCircle-VEY9QfAC.js";import"./Bookmark-DSqUk3x4.js";import"./Archive-r1sYcfUF.js";import"./Trash-B9VlyYzI.js";import"./InformationSquare-BLDef__3.js";import"./globalMenu-BHPgvHc4.js";import"./Buildings2-C_ZFJYly.js";import"./MenuGrid-CqfDM-uT.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-Bwcroym5.js";import"./useLocale-DMJrbO9Q.js";import"./header-DHSkTdNQ.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-CdZwyDhR.js";import"./Button-CO1zFGa4.js";import"./tooltip-CH7-mov_.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-BKaTOud3.js";import"./QueryLabel-CG_dAIz0.js";import"./SettingsItemBase-RyTWVWwB.js";import"./ChevronUp-BM7sC8IQ.js";import"./ChevronDown-_u2ch-6C.js";import"./ChevronRight-CxM-6AgC.js";import"./ItemLink-CKC9Zcw7.js";import"./index-DpFyEq-2.js";import"./ItemMedia-BTzF80jS.js";import"./XMark-DAr8sgUQ.js";import"./Avatar-CUF81_T9.js";import"./Skeleton--3bwKnDN.js";import"./AvatarGroup-ZBmyex5T.js";import"./Icon-CER3YkDn.js";import"./ItemControls-Bpd8WrWV.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./Typography-COzCTzPW.js";import"./useHighlightedText-Db1ksA0v.js";import"./ContextMenu-CNtum_0S.js";import"./useDropdownMenuController-CvvhEQZ7.js";import"./Dropdown-CPTBx2eu.js";import"./MenuElipsisHorizontal-aZjOJxtA.js";import"./SearchField-D--HBqax.js";import"./FieldBase-DmpPz6xV.js";import"./Label-DsF9mxAr.js";import"./Input-BflTpPuJ.js";import"./MenuListItem-Ba7wKRG_.js";import"./MenuListHeading-D9YSE4Po.js";import"./MenuItem-Czug_8v9.js";import"./Checkmark-WbwQiDGB.js";import"./useMenu-OLkOIIh8.js";import"./index-B-QoLJUi.js";import"./Pencil-BM-DRb1F.js";import"./SkipLink--OTapE-3.js";import"./Banner-BHTuFT8I.js";import"./GlobalHeader-DH42BEfr.js";import"./useIsDesktop-bpU9K9vW.js";import"./GlobalAccountButton-C8oi4QS_.js";import"./Enter-C3raXanf.js";import"./GlobalMenuButton-B600tKdA.js";import"./MenuHamburger-DWdWswT9.js";import"./AccountSelector-CvEBBQj7.js";import"./AccountMenu-BK-tXBl9.js";import"./Switch-BD5e0ry_.js";import"./GlobalMenu-Bqru864B.js";import"./ArrowUndo-C5nWWLI0.js";import"./Globe-DJcvVyi1.js";import"./BreadcrumbsLink-CndBd5Jb.js";import"./ArrowRight-nWKAuBPp.js";import"./Footer-mTgV9zpv.js";import"./Flex-pOoXofWS.js";import"./ChevronUpDown-BHEUhOzV.js";import"./ButtonGroup-vd8KP0y5.js";import"./ButtonGroupDivider-DHMyJatP.js";import"./ToolbarMenu-B1E5Clfm.js";import"./ToolbarSearch-DH92-z9I.js";import"./SettingsModal-Be5AEnKf.js";import"./ModalBody-CNB4VnH4.js";import"./Section-Df_v2ciX.js";import"./ButtonIcon-BTj5a5hg.js";import"./ButtonLabel-D9Z2FXBW.js";import"./TextField-Xdm4FrUx.js";import"./Bell-SIMNiyew.js";import"./ClockDashed-DmoSeQJX.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
