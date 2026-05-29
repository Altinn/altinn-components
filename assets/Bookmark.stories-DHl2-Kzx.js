import{p as o}from"./iframe-D7BK96qe.js";import{u as S}from"./useProfileLayout-BdxKiWsE.js";import{u as c,B as g}from"./useBookmarks-Cc_eZAYF.js";import{L as k}from"./Layout-D7xrS6Ks.js";import{P as x}from"./PageBase-HcfgyaWR.js";import{H as p}from"./Heading-Q-ep_pj6.js";import{T as b}from"./Toolbar-BOGkIlzT.js";import{B as I}from"./BookmarkModal-Bqbar0-E.js";import{u as h}from"./useInboxLayout-Cyw12PwT.js";import{u as f}from"./useAccountMenu-BFANgFKU.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-BglTcypd.js";import"./useId-B1IjdNvC.js";import"./Bell-C4qxT1ql.js";import"./Bookmark-CcynwizE.js";import"./ClockDashed-BbDHzBaM.js";import"./globalMenu-oxCVDVZW.js";import"./PersonCircle-CzGMptDK.js";import"./Buildings2-De8pexF1.js";import"./InboxFill-kAZ11OFJ.js";import"./MenuGrid-BRqUiwsl.js";import"./MagnifyingGlass-B3Q8Qlgl.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CZ8Zskdn.js";import"./Trash-CmRN9Bc1.js";import"./useLayout-P8sIdQQz.js";import"./useLocale-BJvoajDt.js";import"./header-k5qb7O3o.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CRon1bQ1.js";import"./BookmarkSettingsItem-Bl-OyUi1.js";import"./QueryLabel-CFET3oqh.js";import"./Plus-C-8iSYwG.js";import"./SettingsItemBase-Dl_TEGd7.js";import"./ItemMedia-BmnjDO8T.js";import"./index-CL9j6gFH.js";import"./XMark-DKvmykI8.js";import"./Avatar-BzaJ_tLr.js";import"./Skeleton-C-TQnNEe.js";import"./AvatarGroup-BXGOcJTt.js";import"./Icon-CXOWvudR.js";import"./ChevronUp-CmwigBl7.js";import"./ChevronDown-RBr9MJP5.js";import"./ChevronRight-B2Fr_XJI.js";import"./ItemBase-BknciWr5.js";import"./ItemLink-BHcTvWw3.js";import"./ItemControls-BZAZaWU9.js";import"./Badge-CP0to2q5.js";import"./Tooltip-BXZ0f-e8.js";import"./tooltip-B8elfXS-.js";import"./Typography-CoOY9SxO.js";import"./useHighlightedText-C3262gRX.js";import"./ContextMenu-CkW9u7kb.js";import"./useDropdownMenuController-D8oAtfoQ.js";import"./Dropdown-CHIS9Scb.js";import"./Button-UbmuloFB.js";import"./SearchField-D67W67ub.js";import"./FieldBase-DmZ-AQhF.js";import"./Label-DW0yr3EV.js";import"./Input-wwG44gvy.js";import"./MenuListItem-CLhEP-2O.js";import"./MenuListHeading-U2jvLcu6.js";import"./MenuItem-BkvPF8Fg.js";import"./Checkmark-BPQmQq7A.js";import"./ItemLabel-CTolDWEe.js";import"./index-P9j8YxHr.js";import"./InformationSquare-BFNj1lbk.js";import"./MenuElipsisHorizontal-Cv2I31dy.js";import"./Pencil-CKFYHFX-.js";import"./SkipLink-Bg8vaqMH.js";import"./Banner-YynZTVZC.js";import"./GlobalHeader-CvXHZKKu.js";import"./useIsDesktop-PMHXXYUc.js";import"./GlobalAccountButton-BSlA4uPB.js";import"./Enter-DaYQWjuH.js";import"./GlobalMenuButton-D1XqvnHT.js";import"./MenuHamburger-Bs0s8Y7O.js";import"./AccountSelector-C8v5N-Us.js";import"./Switch-qdZlSErG.js";import"./AccountMenu-19aQyamh.js";import"./GlobalMenu-C8GOo16D.js";import"./ArrowUndo-DBwwr2s1.js";import"./Globe-Cpr4Y4_L.js";import"./BreadcrumbsLink-DIUVIcMw.js";import"./ArrowRight-C46TxStQ.js";import"./Footer-C_NfrQSv.js";import"./Flex-DKrdkBVD.js";import"./ButtonGroup-DiPjg2lm.js";import"./ButtonGroupDivider-CgeFqPtI.js";import"./ChevronUpDown-BANlVG6s.js";import"./ToolbarMenu-D4V0JlAe.js";import"./ToolbarSearch-DjyhuTHy.js";import"./SettingsModal-ygENr3l7.js";import"./ModalBody-CO_In9L6.js";import"./Section-G7MRDbZ9.js";import"./ButtonIcon-DuHIMlrP.js";import"./ButtonLabel-fpKRE7dz.js";import"./TextField-CdGCjvMA.js";import"./inboxMenu-Dd1kDKrZ.js";const Ce={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const Le=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,Le as __namedExportsOrder,Ce as default};
