import{j as o}from"./iframe-V8BRfBgT.js";import{u as h}from"./useInboxLayout-BPbhsHPh.js";import{u as j}from"./useAccountMenu-DhSj_npj.js";import{u as c,B as g}from"./useBookmarks-DCfqEYdd.js";import{L as k}from"./Layout-DS8svBca.js";import{P as x}from"./PageBase-ChDmMgb2.js";import{H as p}from"./Heading-CGSCg4GY.js";import{T as b}from"./Toolbar-COw40rPO.js";import{B as I}from"./BookmarkModal-BhuD5T58.js";import{u as S}from"./useProfileLayout-CjSiQuh6.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-rmtScxK6.js";import"./InboxFill-CLQZBoZX.js";import"./useId-Cpax_hNq.js";import"./Plus-DYqQ5ZW1.js";import"./PersonCircle-cRtiAMfx.js";import"./Bookmark-CfrDm0KI.js";import"./Archive-DYvBW6Wd.js";import"./Trash-BZTx2yoj.js";import"./InformationSquare-Bxq9CYlT.js";import"./globalMenu-Bx5X-jAf.js";import"./Buildings2-jLJeRhKN.js";import"./MenuGrid-WBv5f01c.js";import"./MagnifyingGlass-DvXaPbUD.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-C-iL9URr.js";import"./useLocale-y3YsWHEh.js";import"./header-BehWPj7B.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-YlZNLLsB.js";import"./Button-BlxzDMPI.js";import"./button-2-meUg78.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DtQmnqL0.js";import"./QueryLabel-BxPUsrn3.js";import"./SettingsItemBase-BV6WBeO5.js";import"./ChevronUp-DYD-_Lcf.js";import"./ChevronDown-Dj082slW.js";import"./ChevronRight-Cz_uty1S.js";import"./ItemLink-B6sA5uMo.js";import"./index-Dg3z2A9f.js";import"./ItemMedia-C3tA4Zzy.js";import"./XMark-C45HvrEl.js";import"./Avatar-BDDvrYzF.js";import"./Skeleton-BQtaEJM-.js";import"./AvatarGroup-KHWc8S2T.js";import"./Icon-BWOTtVf8.js";import"./ItemControls-BctCfWNT.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-BiIpQq_S.js";import"./useHighlightedText-DnT87ATC.js";import"./ContextMenu-D6_jywBP.js";import"./useDropdownMenuController-B5tdkj26.js";import"./Dropdown-ChJd6AE_.js";import"./MenuElipsisHorizontal-DkUfYG-z.js";import"./SearchField-D2AXVYp0.js";import"./FieldBase-DENJ-wBn.js";import"./Label-DdQ1zxpY.js";import"./index-ByKBsU4r.js";import"./Input-zOuJx9ZS.js";import"./input-1VpPOyjR.js";import"./MenuListItem-Ckqn-jsk.js";import"./MenuListHeading-nXDmyZ7G.js";import"./MenuItem-DQUORZa0.js";import"./Checkmark-BKwfqVUb.js";import"./useMenu-D2cFOQcG.js";import"./index-84oeY8HP.js";import"./Pencil-CaJ-c92M.js";import"./SkipLink-XE89HiH5.js";import"./Banner-CdvdYJhx.js";import"./GlobalHeader-W4TQvnUS.js";import"./useIsDesktop-Bl9_iylm.js";import"./GlobalAccountButton-D1niDOz_.js";import"./Enter-BTLcflkc.js";import"./GlobalMenuButton-JCXthAIP.js";import"./MenuHamburger-BATPuSR-.js";import"./AccountSelector-K8BxGoPa.js";import"./heading-DRHKTNUx.js";import"./AccountMenu-BEGmSxR4.js";import"./Switch-tNambPi0.js";import"./GlobalMenu-6qJ841gB.js";import"./ArrowUndo-ZeGtF0l8.js";import"./Globe-DF7sL7sD.js";import"./BreadcrumbsLink-DcG-L0Vs.js";import"./ArrowRight-tNKEYIfv.js";import"./Footer-Y_g0CgdM.js";import"./Flex-Cr7oVI5u.js";import"./ChevronUpDown-CFkX2GwM.js";import"./ButtonGroup-GmtwjaC0.js";import"./ButtonGroupDivider-DCIj-SRz.js";import"./ToolbarMenu-D3KQzrUC.js";import"./ToolbarSearch-6Fm-z8Bv.js";import"./SettingsModal-DeDDsN3r.js";import"./ModalBody-6Y6EgB47.js";import"./Section-BCm3_cLa.js";import"./ButtonIcon-Cv74LTLY.js";import"./ButtonLabel-Du-lXLEM.js";import"./TextField-Dm4BLBNO.js";import"./Bell-C4Xj-ndx.js";import"./ClockDashed-C2nR6RxU.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
