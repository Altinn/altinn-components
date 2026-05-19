import{j as o}from"./iframe-GJv3-kpe.js";import{u as h}from"./useInboxLayout-BlmMQBfH.js";import{u as j}from"./useAccountMenu-DIz_6x6q.js";import{u as c,B as g}from"./useBookmarks-Q04TGOP_.js";import{L as k}from"./Layout-CiJWqrM8.js";import{P as x}from"./PageBase-BzRsWLMH.js";import{H as p}from"./Heading-CiHDuood.js";import{T as b}from"./Toolbar-CyofLDtD.js";import{B as I}from"./BookmarkModal-DuvXEugl.js";import{u as S}from"./useProfileLayout-cc2-LoM5.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-CVo3Drxa.js";import"./InboxFill-Cnv6fcar.js";import"./useId-B1GQrjht.js";import"./Plus-9DzdC6C4.js";import"./PersonCircle-9EKdXSyZ.js";import"./Bookmark-B5mmMKvT.js";import"./Archive-CmHW744W.js";import"./Trash-CCKQd2Hf.js";import"./InformationSquare-Crm3l9Sr.js";import"./globalMenu-B4GmlJBL.js";import"./Buildings2-Bfg_uNMu.js";import"./MenuGrid-B538mca7.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-Dumh26yR.js";import"./useLocale-CyABlUyR.js";import"./header-DzC44STw.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-BWVbn9KR.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-2zHqBgYc.js";import"./QueryLabel-C4dr9Kep.js";import"./SettingsItemBase-C5TELNS3.js";import"./ChevronUp-DpWMs-eZ.js";import"./ChevronDown-DZsHrJjp.js";import"./ChevronRight-C3wqtQo3.js";import"./ItemLink-Pose4tqX.js";import"./index-D19pPnAw.js";import"./ItemMedia-45ogcwRE.js";import"./XMark-D7blLnze.js";import"./Avatar-CGv-fnY8.js";import"./Skeleton-dVNdeapn.js";import"./AvatarGroup-DxuzyW4n.js";import"./Icon-DKgAzIsH.js";import"./ItemControls-3C4JbZ3m.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-XN79jGlV.js";import"./useHighlightedText-ClfYglU-.js";import"./ContextMenu-DR011-2b.js";import"./useDropdownMenuController-CTnnTueZ.js";import"./Dropdown-CFn-KtHz.js";import"./MenuElipsisHorizontal-C_K0JSPh.js";import"./SearchField-D4OrqN5V.js";import"./FieldBase-D2hpNZAE.js";import"./Label-Bx3ShTJ6.js";import"./index-OoPsm9QB.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./MenuListItem-BuleDevk.js";import"./MenuListHeading-w-EtPB4c.js";import"./MenuItem-CRhKMxAm.js";import"./Checkmark-DXLqUvZZ.js";import"./useMenu-D_O6qRR4.js";import"./index-CNHiDjij.js";import"./Pencil-qhcKZSlK.js";import"./SkipLink-BP-D6HBa.js";import"./Banner-C96jgkCh.js";import"./GlobalHeader-CGqKj64U.js";import"./useIsDesktop-B-Z1HFB-.js";import"./GlobalAccountButton-DNoVd3Ny.js";import"./Enter-BP89yifq.js";import"./GlobalMenuButton-B64wgRml.js";import"./MenuHamburger-5Bxt9Ko4.js";import"./AccountSelector-C3yU2dxa.js";import"./heading-C_aN_g_L.js";import"./AccountMenu-sHkQdxNE.js";import"./Switch-DmKXGw5v.js";import"./GlobalMenu-DmtUYCXV.js";import"./ArrowUndo-DCdXG6nd.js";import"./Globe-CoSwJzs5.js";import"./BreadcrumbsLink-BPqwoo7D.js";import"./ArrowRight-No5z07YA.js";import"./Footer-CyLdrtET.js";import"./Flex-CxS25VqD.js";import"./ChevronUpDown-BiWl0_hb.js";import"./ButtonGroup-CkGxccE7.js";import"./ButtonGroupDivider-DWQ-x5Lg.js";import"./ToolbarMenu-dhwcTxdK.js";import"./ToolbarSearch-D4YvEV4z.js";import"./SettingsModal-BtcjVjo_.js";import"./ModalBody-C4Y7ExYH.js";import"./Section-BvBlt0Cn.js";import"./ButtonIcon-Bi2Ix8OH.js";import"./ButtonLabel-BZ1WKaDO.js";import"./TextField-Czkxag-i.js";import"./Bell-BTom6BN8.js";import"./ClockDashed-BA999rwy.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
