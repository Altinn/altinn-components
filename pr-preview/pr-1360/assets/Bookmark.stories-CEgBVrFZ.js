import{a7 as o}from"./iframe-BKPYfBaP.js";import{u as S}from"./useProfileLayout-C1m78Ir4.js";import{u as c,B as g}from"./useBookmarks-d7S1wbtF.js";import{L as k}from"./Layout-CMjm2tJC.js";import{P as x}from"./PageBase-DhDayEgN.js";import{H as p}from"./Heading-BlMy4Ad2.js";import{T as b}from"./Toolbar-BGxc1toz.js";import{B as I}from"./BookmarkModal-CngUqxSy.js";import{u as h}from"./useInboxLayout-BAJWle0h.js";import{u as f}from"./useAccountMenu-DTnieR8A.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-ClW5moNW.js";import"./Bell-BMZ0DcwT.js";import"./Bookmark-C7VR73qx.js";import"./ClockDashed-BrEdvt7Z.js";import"./globalMenu-DSOs4F-M.js";import"./PersonCircle-ClfUp13-.js";import"./Buildings2-C-O3AVkE.js";import"./InboxFill-Dim3XRif.js";import"./MenuGrid-CZS2OUqb.js";import"./MagnifyingGlass-BcIgrRKJ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CIUvgHr0.js";import"./Trash-Cnwe6yaS.js";import"./useLayout-BVUGlFtZ.js";import"./useLocale-o4iH5XfL.js";import"./header-CqqbQ1CR.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BEKNpnot.js";import"./BookmarkSettingsItem-O_l8lLMH.js";import"./QueryLabel-3FEY_FdN.js";import"./Plus-3k5Jqwe2.js";import"./SettingsItemBase-CDU1KS3L.js";import"./ItemMedia-CfPfvhkB.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./ChevronUp-B-ED2Onp.js";import"./ChevronDown-CR6j5uYN.js";import"./ChevronRight-CfHO682k.js";import"./ItemBase-CdLQP71A.js";import"./ItemLink-BZrHh3il.js";import"./ItemControls-MYYKbbE3.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./Typography-Cdqx97qL.js";import"./useHighlightedText-BNKt0Eyh.js";import"./ContextMenu-kuBM2y8u.js";import"./useDropdownMenuController-BCeELClC.js";import"./Dropdown-BaK7GwBJ.js";import"./SearchField-BEBaG6GH.js";import"./FieldBase-BZsWcTUs.js";import"./Field-DD7IzQnc.js";import"./Label-TLLhNVMu.js";import"./Input-CHWt3Nk0.js";import"./MenuListItem-Dox6r-gI.js";import"./MenuListDivider-Br9qCroM.js";import"./MenuListHeading-DETCOsyl.js";import"./MenuItem-Bx6H1W-Q.js";import"./Checkmark-CamERl7S.js";import"./ItemLabel-CAfmR_Xk.js";import"./InformationSquare-BcX77Iuf.js";import"./MenuElipsisHorizontal-OrSE-G0S.js";import"./Pencil-lM3EgB-b.js";import"./SkipLink-BCWqN3F4.js";import"./CookieBanner-C99ddqmD.js";import"./Banner-DMEYucF2.js";import"./GlobalHeader-C_THL8xz.js";import"./useIsDesktop-EkiOMZ7A.js";import"./GlobalAccountButton-DjUCe58B.js";import"./Enter-Cp7eRPyv.js";import"./GlobalMenuButton-BKYW8NoQ.js";import"./MenuHamburger-BprZ1BzR.js";import"./AccountSelector-D2m594M4.js";import"./Switch-T1iKx95o.js";import"./AccountMenu-BBS5mw4I.js";import"./GlobalMenu-Bub5e2_m.js";import"./ArrowUndo-CbmIsveB.js";import"./Globe-DzU898X1.js";import"./BreadcrumbsLink-CVY2PFJQ.js";import"./ArrowRight-CJStjUi1.js";import"./Footer-DwEZ0RGQ.js";import"./Flex-Dg9OypdH.js";import"./ButtonGroup-CQeTBn3N.js";import"./ButtonGroupDivider-BMGjWlQi.js";import"./ChevronUpDown-BrFQGHzL.js";import"./ToolbarMenu-CRWcjhoA.js";import"./ToolbarSearch-RJ7X-8dT.js";import"./SettingsModal-B7N099VA.js";import"./ModalBody-qGK1jZij.js";import"./Section-DIn3fiOi.js";import"./ButtonIcon-g3sANd5j.js";import"./ButtonLabel-CEapPxhA.js";import"./TextField-C5wmiUHQ.js";import"./inboxMenu-jqwdlZRR.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const xe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,xe as __namedExportsOrder,ke as default};
